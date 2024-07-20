document.getElementById('generateLinks').addEventListener('click', function() {
    const input = document.getElementById('domainInput').value;
    const domains = input.split('\n').map(domain => domain.trim()).filter(domain => domain);
    const output = domains.map(domain => `https://ahrefs.com/traffic-checker/?input=${domain}&mode=subdomains`).join('\n');
    
    document.getElementById('outputLinks').value = output;
});

document.getElementById('copyLinks').addEventListener('click', function() {
    const output = document.getElementById('outputLinks');
    output.select();
    document.execCommand('copy');
    alert('Links copied to clipboard!');
});
