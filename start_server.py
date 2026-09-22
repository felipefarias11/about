import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable caching-friendly headers & UTF-8
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run_server():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    global PORT
    
    # Check if port is busy, fallback to next
    for p in range(8080, 8095):
        try:
            with socketserver.TCPServer(("", p), Handler) as httpd:
                print(f"===============================================================")
                print(f"  PORTFOLIO EXECUTIVO - FELIPE FARIAS SANTANA")
                print(f"  Servidor rodando com sucesso em: http://localhost:{p}")
                print(f"  Pressione Ctrl+C para encerrar o servidor.")
                print(f"===============================================================")
                webbrowser.open(f"http://localhost:{p}")
                httpd.serve_forever()
                break
        except OSError:
            continue

if __name__ == '__main__':
    run_server()
