javascript:(function(){
    const HKGeodeticConverter={
        WGS84_A:6378137,WGS84_F:1/298.257223563,HK80_A:6378388,HK80_F:1/297,
        DX:-162.619,DY:-276.959,DZ:-171.599,FALSE_EASTING:836694.05,FALSE_NORTHING:819069.80,
        CENTRAL_MERIDIAN:114+(10/60)+(42.846/3600),LAT_ORIGIN:22+(18/60)+(43.68/3600),
        SCALE_FACTOR:1.0,EASTING_ADJUSTMENT:-512,NORTHING_ADJUSTMENT:200,
        toRadians(deg){return deg*Math.PI/180;},
        toDegrees(rad){return rad*180/Math.PI;},
        wgs84ToHK80(lat,lon,height){
            const phi=this.toRadians(lat);const lambda=this.toRadians(lon);const h=height;
            const e2=2*this.WGS84_F-this.WGS84_F*this.WGS84_F;
            const N=this.WGS84_A/Math.sqrt(1-e2*Math.sin(phi)*Math.sin(phi));
            const X=(N+h)*Math.cos(phi)*Math.cos(lambda);
            const Y=(N+h)*Math.cos(phi)*Math.sin(lambda);
            const Z=(N*(1-e2)+h)*Math.sin(phi);
            const X_HK80=X+this.DX;const Y_HK80=Y+this.DY;const Z_HK80=Z+this.DZ;
            const e2_HK80=2*this.HK80_F-this.HK80_F*this.HK80_F;
            const p=Math.sqrt(X_HK80*X_HK80+Y_HK80*Y_HK80);
            const theta=Math.atan2(Z_HK80*this.HK80_A,p*(1-e2_HK80)*this.HK80_A);
            const sinTheta=Math.sin(theta);const cosTheta=Math.cos(theta);
            const phi_HK80=Math.atan2(Z_HK80+e2_HK80*this.HK80_A*sinTheta*sinTheta*sinTheta,p-e2_HK80*this.HK80_A*cosTheta*cosTheta*cosTheta);
            const lambda_HK80=Math.atan2(Y_HK80,X_HK80);
            const N_HK80=this.HK80_A/Math.sqrt(1-e2_HK80*Math.sin(phi_HK80)*Math.sin(phi_HK80));
            const h_HK80=p/Math.cos(phi_HK80)-N_HK80;
            return{lat:this.toDegrees(phi_HK80),lon:this.toDegrees(lambda_HK80),height:h_HK80};
        },
        hk80ToHK80Grid(lat,lon){
            const phi=this.toRadians(lat);const lambda=this.toRadians(lon);
            const lambda0=this.toRadians(this.CENTRAL_MERIDIAN);const phi0=this.toRadians(this.LAT_ORIGIN);
            const e2=2*this.HK80_F-this.HK80_F*this.HK80_F;
            const N=this.HK80_A/Math.sqrt(1-e2*Math.sin(phi)*Math.sin(phi));
            const T=Math.tan(phi)*Math.tan(phi);const C=e2/(1-e2)*Math.cos(phi)*Math.cos(phi);
            const A=(lambda-lambda0)*Math.cos(phi);
            const M=this.HK80_A*((1-e2/4-3*e2*e2/64-5*e2*e2*e2/256)*phi-(3*e2/8+3*e2*e2/32+45*e2*e2*e2/1024)*Math.sin(2*phi)+(15*e2*e2/256+45*e2*e2*e2/1024)*Math.sin(4*phi)-(35*e2*e2*e2/3072)*Math.sin(6*phi));
            const M0=this.HK80_A*((1-e2/4-3*e2*e2/64-5*e2*e2*e2/256)*phi0-(3*e2/8+3*e2*e2/32+45*e2*e2*e2/1024)*Math.sin(2*phi0)+(15*e2*e2/256+45*e2*e2*e2/1024)*Math.sin(4*phi0)-(35*e2*e2*e2/3072)*Math.sin(6*phi0));
            const easting=this.FALSE_EASTING+this.SCALE_FACTOR*N*(A+(1-T+C)*A*A*A/6+(5-18*T+T*T+72*C-58*e2)*A*A*A*A*A/120);
            const northing=this.FALSE_NORTHING+this.SCALE_FACTOR*(M-M0+N*Math.tan(phi)*(A*A/2+(5-T+9*C+4*C*C)*A*A*A*A/24+(61-58*T+T*T+600*C-330*e2)*A*A*A*A*A*A/720));
            return{easting,northing};
        },
        wgs84ToHK80Grid(lat,lon,height){
            const hk80=this.wgs84ToHK80(lat,lon,height);
            const grid=this.hk80ToHK80Grid(hk80.lat,hk80.lon);
            grid.easting+=this.EASTING_ADJUSTMENT;grid.northing+=this.NORTHING_ADJUSTMENT;
            return grid;
        }
    };
    const url=window.location.href;
    const match=url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
    if(!match){alert('Please open a Google Maps URL with coordinates (e.g., https://www.google.com/maps/@22.3193,114.1694,15z)');return;}
    const lat=parseFloat(match[1]);const lon=parseFloat(match[2]);
    const hk80=HKGeodeticConverter.wgs84ToHK80Grid(lat,lon,0);
    const centamapUrl=`http://hk.centamap.com/gc/home.aspx?x=${hk80.easting}&y=${hk80.northing}&sx=${hk80.easting}&sy=${hk80.northing}&z=4&lg=b5`;
    window.open(centamapUrl,'_blank');
})();