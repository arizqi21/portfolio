import sys
import csv
import os
from faster_whisper import WhisperModel

def transcribe(input_file, output_csv):
    if not os.path.exists(input_file):
        print(f"❌ Error: File {input_file} tidak ditemukan.")
        return

    # Inisialisasi Model
    print("⏳ Memuat model large-v3 ke RAM (M4 Power)...")
    model = WhisperModel("large-v3", device="cpu", compute_type="float32")

    print(f"🎙️ Mulai transkripsi: {os.path.basename(input_file)}")
    
    # Transcribe dengan live progress
    segments, info = model.transcribe(input_file, language="id", word_timestamps=True)

    print(f"✅ Bahasa terdeteksi: {info.language} (Probabilitas: {info.language_probability:.2f})")
    print(f"🕒 Durasi Audio: {info.duration:.2f} detik")
    print("-" * 30)

    all_words = []
    
    # Bagian ini yang bikin muncul progres di Terminal
    for segment in segments:
        # Menampilkan progres waktu saat ini di terminal
        print(f"▶️ Memproses: [{segment.start:.2f}s -> {segment.end:.2f}s] {segment.text}")
        
        for word in segment.words:
            all_words.append([f"{word.start:.3f}", f"{word.end:.3f}", word.word.strip()])

    # Tulis hasil ke CSV
    with open(output_csv, "w", encoding="utf-8", newline='') as f:
        writer = csv.writer(f)
        writer.writerow(["start", "end", "word"]) 
        writer.writerows(all_words)
    
    print("-" * 30)
    print(f"🏁 SELESAI! Hasil disimpan di: {output_csv}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Cara pakai: python3 transcribe.py <input_mp3> <output_csv>")
    else:
        transcribe(sys.argv[1], sys.argv[2])