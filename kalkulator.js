function hitungBMI() {
  // Mengambil nilai dari input
  var beratBadan = parseFloat(document.getElementById("beratBadan").value);
  var tinggiBadan = parseFloat(document.getElementById("tinggiBadan").value);
  var usia = parseInt(document.getElementById("usia").value);

  // Konversi tinggi badan ke meter
  tinggiBadan = tinggiBadan / 100;

  // Menghitung BMI
  var bmi = beratBadan / (tinggiBadan * tinggiBadan);

  // Menampilkan hasil BMI
  var hasilBMI = "BMI Anda adalah " + bmi.toFixed(2) + "<br>";

  // Menampilkan kategori berdasarkan BMI dan usia
  if (usia < 19) {
    hasilBMI += "Usia kurang dari 19 tahun, tidak ada kategori BMI.";
  } else {
    if (bmi < 18.5) {
      hasilBMI += "Kategori: Underweight (Kurus)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      hasilBMI += "Kategori: Normal (Sehat)";
    } else if (bmi >= 25 && bmi < 29.9) {
      hasilBMI += "Kategori: Overweight (Kelebihan Berat Badan)";
    } else if (bmi >= 30) {
      hasilBMI += "Kategori: Obesitas";
    }
  }

  // Menampilkan hasil di dalam elemen dengan id "hasilBMI"
  document.getElementById("hasilBMI").innerHTML = hasilBMI;
}
