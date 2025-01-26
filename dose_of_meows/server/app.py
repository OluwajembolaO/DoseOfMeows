from flask import Flask, request, jsonify, url_for
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

# Define the directory to store uploaded images
UPLOAD_FOLDER = 'uploaded_images'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Create the folder if it doesn't exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400
    
    image = request.files['image']
    
    if image.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    # Secure the filename and save the file
    filename = secure_filename(image.filename)
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    image.save(image_path)
    
    # Generate a URL for the uploaded file
    image_url = url_for('serve_image', filename=filename, _external=True)
    return jsonify({'image_url': image_url}), 200

@app.route('/uploaded_images/<filename>', methods=['GET'])
def serve_image(filename):
    return app.send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    app.run(debug=True)
