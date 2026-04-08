import re
import sys

def process_html():
    with open('c:\\Users\\AOC\\Downloads\\MSC Agriculture\\stitch_download.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Remove the CDN link
    html = re.sub(r'<script src="https://cdn\.tailwindcss\.com.*?</script>', '', html)
    # Remove tailwind-config script block
    html = re.sub(r'<script id="tailwind-config">.*?</script>', '', html, flags=re.DOTALL)
    # Remove style block since we put it in style.css
    html = re.sub(r'<style>.*?</style>', '', html, flags=re.DOTALL)
    # Remove the scripts block at bottom since we put it in main.js
    html = re.sub(r'<script>.*?</script>', '', html, flags=re.DOTALL)
    
    # Add script module for vite
    html = html.replace('</body>', '  <script type="module" src="/main.js"></script>\n</body>')
    
    with open('c:\\Users\\AOC\\Downloads\\MSC Agriculture\\msc-agri-site\\index.html', 'w', encoding='utf-8') as f:
        f.write(html)

if __name__ == "__main__":
    process_html()
