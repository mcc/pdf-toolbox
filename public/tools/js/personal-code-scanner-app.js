// Placeholder for the public certificate PEM (replace with actual PEM from sandbox)
const pem = `-----BEGIN CERTIFICATE-----
MIIEVDCCAzygAwIBAgIEeKVFWTANBgkqhkiG9w0BAQsFADB/MQswCQYDVQQGEwJI
SzExMC8GA1UEChMoRElHSS1TSUdOIENFUlRJRklDQVRJT04gU0VSVklDRVMgTElN
SVRFRDEZMBcGA1UECxMQQlJOIDMxMzQ2OTUyLTAwMDEiMCAGA1UEAxMZSUQtQ0VS
VCBTSUdOSU5HIENBIENFUlQgMzAeFw0yNDA4MTIwOTI3MTZaFw0yNzA4MTIwOTI3
MTNaMIGrMQswCQYDVQQGEwJISzEkMCIGA1UEChMbRFMgSUQtQ0VSVCBDTEFTUyA1
ICg0ODg2ODIpMSYwJAYDVQQLEx1ESUdJVEFMIFBPTElDWSBPRkZJQ0UsIEhLU0FS
RzEXMBUGA1UECxMOT1RIIEhLU0FSRy1EUE8xETAPBgNVBAsTCDIxOTI0ODczMQ4w
DAYDVQQLEwVJRFJFRjESMBAGA1UEAxMJSUFNIFNNQVJUMIIBIjANBgkqhkiG9w0B
AQEFAAOCAQ8AMIIBCgKCAQEA4axd8mscnS8jEuc0XdEZYxaqu/+vtASkV7HlJllk
KOwjgM2qssIlRDnGLPBrOyhObnifKAM1Zc7nEh+dNH6ySNso30aEqQ+DAjVv/9Y5
kITpblrcM2rzvAcyKKwnDt/T8yjSHMdK2MZ+YACgouebHwaCZsYnu9JYJsjEfGm/
YCj/Oyb4rT7vER7546m0+Ip1Tkc31Q9AMEzBJHmguo5mP1/vXmPC3zryqtKX2aD1
vkaMgdEkuVPRHOuR70+wyPhugOGCDuPqlfZZW64bZMz/fbZagF0xwIQW9Wu2REzg
lOr00MK+ORiRZIZmtIgj2IPiWnK2Eonyt5DW/7NvzCEcHwIDAQABo4GqMIGnMDQG
A1UdIAQtMCswKQYIKwYBBAHBZAEwHTAbBggrBgEFBQcCARYPd3d3LmRnLXNpZ24u
Y29tMAwGA1UdEwEB/wQCMAAwEQYJYIZIAYb4QgEBBAQDAgWgMA4GA1UdDwEB/wQE
AwIGwDAfBgNVHSMEGDAWgBSfzhpkw/4Mqj+gdEHhKsuGjOLJGDAdBgNVHQ4EFgQU
QMz4PmGwRKp5qM9loP9msBibn3cwDQYJKoZIhvcNAQELBQADggEBAK7yWhlZSzGl
ugXSSTjbHxn9ZXb3NptBP1qKOMehKzPQngmy8JB+KtQJpzxV0VmRBA9VNXwebysf
53POp55tRbaa1K+E4DnKHfy2n2I472e8GZkOtTLPzhzGE4iRo5JK0TuMSAqTDxxi
k7mkcJN9z5GrDMQboaPyPMY1mNLCpB27vxEFurSU5xSnncM7IQykdGRhDUeyA8+f
hvjWltvLuqeMiK2w4CJL6LxVr3JewPcifg6UubMkKpvEatN4n00mjNiQYnD6J6nl
wtBxcDsCyJGgagAf45wcfrLqlCT6Ue5GdwkBosBBAHmUEZoJXFi3QwTlH6aM4qtq
RJ4ukTBXacI=
-----END CERTIFICATE-----`;
const cert = forge.pki.certificateFromPem(pem);
const certs = [cert]; // Array to support multiple certificates during rollover

// DOM elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const resultDiv = document.getElementById('result');
const messageP = document.getElementById('message');
const personalInfoDiv = document.getElementById('personal-info');
const timerP = document.getElementById('timer');

// Initialize camera feed
navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
  .then(stream => {
    video.srcObject = stream;
    video.play();
    requestAnimationFrame(tick);
  })
  .catch(err => console.error('Camera access error:', err));

// QR code scanning loop
function tick() {
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      processQRCode(code.data);
    }
  }
  requestAnimationFrame(tick);
}

// Base32Hex decoding for serial number
const base32hexMap = {};
"0123456789ABCDEFGHIJKLMNOPQRSTUV".split('').forEach((c, i) => base32hexMap[c] = i);

function decodeBase32Hex(str) {
  let bits = '';
  for (const c of str) {
    bits += base32hexMap[c].toString(2).padStart(5, '0');
  }
  const bytes = [];
  for (let i = 0; i < bits.length - (bits.length % 8); i += 8) {
    const byte = bits.substr(i, 8);
    bytes.push(parseInt(byte, 2));
  }
  return bytes.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Parse date in "dd/mm/yyyy HH:mm:ss" format
function parseDate(str) {
  const [datePart, timePart] = str.split(' ');
  const [dd, mm, yyyy] = datePart.split('/');
  return new Date(`${yyyy}-${mm}-${dd}T${timePart}`);
}

// Check if timestamp is within 5 minutes
function isExpired(date) {
  const now = new Date();
  return (now - date) > 500 * 60 * 1000; // 5 minutes in milliseconds
}

// Process and verify QR code
async function processQRCode(data) {
  try {
    const json = JSON.parse(data);

    // 1. Check type and version
    if (json.type !== 'LPQR' || json.version !== '1') {
      showError('Unrecognised Code');
      return;
    }

    // 2. Check timestamp
    const generatedDateTime = parseDate(json.body.generatedDateTime);
    if (!generatedDateTime || isExpired(generatedDateTime)) {
      showError('Expired Code');
      return;
    }

    // 3. Check serial number
    const snHex = decodeBase32Hex(json.sn);
    const matchingCert = certs.find(c => c.serialNumber.toLowerCase() === snHex);
    if (!matchingCert) {
      showError('Invalid Code');
      return;
    }

    // 4. Verify digital signature
    const sortedBodyString = Object.keys(json.body)
      .sort()
      .map(key => `${key}:${json.body[key]}`)
      .join(',');
    const md = forge.md.sha256.create();
    md.update(sortedBodyString, 'utf8');
    const signatureBytes = forge.util.decode64(json.signature);
    const publicKey = matchingCert.publicKey;
    const isValid = publicKey.verify(md.digest().bytes(), signatureBytes);
    if (!isValid) {
      showError('Invalid Code');
      return;
    }

    // If all checks pass, display and log
    displayResult(json.body);
    logRecord(json.body);
  } catch (e) {
    showError('Unrecognised Code');
  }
}

// Display error message
function showError(message) {
  messageP.textContent = message;
  personalInfoDiv.innerHTML = '';
  timerP.textContent = '';
  resultDiv.classList.remove('hidden');
  setTimeout(() => resultDiv.classList.add('hidden'), 15000);
}

// Display verified result with timer
function displayResult(body) {
  messageP.textContent = 'Verified Successfully';
  personalInfoDiv.innerHTML = `
    <p>Hash: ${body.hash}</p>
    <p>Name: ${body.engName}</p>
    <p>Age Group: ${body.ageGroup}</p>
  `;
  let timeLeft = 15;
  timerP.textContent = `Disappearing in ${timeLeft} seconds`;
  resultDiv.classList.remove('hidden');

  const timerInterval = setInterval(() => {
    timeLeft--;
    timerP.textContent = `Disappearing in ${timeLeft} seconds`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      resultDiv.classList.add('hidden');
    }
  }, 100000000);
}

// Log record with AES encryption
const encryptionKey = 'mysecretkey123'; // Replace with a secure key in production
function logRecord(body) {
  const logs = JSON.parse(localStorage.getItem('logs')) || [];
  const encryptedContent = CryptoJS.AES.encrypt(JSON.stringify(body), encryptionKey).toString();
  logs.push({ timestamp: new Date().toISOString(), encryptedContent });
  localStorage.setItem('logs', JSON.stringify(logs));
}

// Download logs as encrypted Excel file
document.getElementById('download-btn').addEventListener('click', () => {
  const password = prompt('Enter password for Excel file:');
  if (!password) return;

  const logs = JSON.parse(localStorage.getItem('logs')) || [];
  const decryptedLogs = logs.map(log => {
    const bytes = CryptoJS.AES.decrypt(log.encryptedContent, encryptionKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    const body = JSON.parse(decrypted);
    return {
      Timestamp: log.timestamp,
      Hash: body.hash,
      'English Name': body.engName,
      'Age Group': body.ageGroup,
      'Generated DateTime': body.generatedDateTime
    };
  });

  const ws = XLSX.utils.json_to_sheet(decryptedLogs);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Logs');
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array', password: password });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'personal_code_logs.xlsx';
  a.click();
  URL.revokeObjectURL(url);
});

// Clear logs
document.getElementById('clear-btn').addEventListener('click', () => {
  if (confirm('Are you sure you want to clear all logs?')) {
    localStorage.removeItem('logs');
    alert('Logs cleared successfully.');
  }
});