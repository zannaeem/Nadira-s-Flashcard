
export interface Flashcard {
  id: number;
  soalan: string;
  jawapan: string;
}

export interface Chapter {
  id: string;
  title: string;
  cards: Flashcard[];
}

export const FLASHCARD_DATA: Chapter[] = [
  {
    id: 'bab6',
    title: 'BAB 6: Perniagaan Antarabangsa',
    cards: [
      {
        id: 1,
        soalan: "MAKSUD PERNIAGAAN ANTARABANGSA",
        jawapan: "Aktiviti jual beli barang dan perkhidmatan dengan menggunakan wang @ alatan lain bagi memenuhi keperluan dan kehendak pelanggan pada harga, masa, dan tempat yang sesuai bagi mendapatkan keuntungan, faedah dan kepuasan yang melampaui sempadan politik sesebuah negara."
      },
      {
        id: 2,
        soalan: "APAKAH PERANAN PERNIAGAAN ANTARABANGSA",
        jawapan: "Tukaran Asing: Kadar nilai matawang sesebuah negara yang bertukar dengan nilai matawang sebuah negara yang lain.\nMeluaskan Pasaran: Menawarkan pasaran-pasaran baharu kepada perniagaan tempatan yang mengalami lebihan dalam negara.\nMeningkatkan Mobiliti Guna Tenaga: Mewujudkan peluang pekerjaan di dalam dan di luar negara.\nPemindahan Teknologi: Menerima pemindahan teknologi dari luar negara."
      },
      {
        id: 3,
        soalan: "JELASKAN KAEDAH PERNIAGAAN ANTARABANGSA",
        jawapan: "- Import: Aktiviti pembelian barangan dan perkhidmatan dari negara luar dan dibawa masuk untuk kegunaan dalam negara oleh individu atau organisasi.\n- Eksport: Aktiviti penjualan barangan dan perkhidmatan ke luar negara kepada pembeli individu atau organisasi di negara asing.\n- Perlesenan: Pemberian hak dan kebenaran kepada sesebuah syarikat di negara asing bagi tempoh tertentu untuk mengeluar atau memasar atau kedua-dua sekali sesuatu jenama produk atau perkhidmatannya.\n- Kontrak Pengeluaran: Memberi kebenaran kepada individu atau syarikat lain untuk mengeluarkan sesuatu barangan siap, komponen alat atau sebahagian daripada barang siap.\n- Francais: Pemberian satu pakej di mana francaisi dibenar mengguna tanda niaga perniagaan, perkhidmatan dan produk, prinsip-prinsip pengoperasian atau pengurusan syarikat, peraturan pengurusan dan khidmat nasihat.\n- Usahasama: Kerjasama beberapa syarikat antarabangsa melalui gabungan sumber-sumber yang dimiliki bagi menjalankan perniagaan yang bermotifkan keuntungan.\n- Pelaburan Langsung: Merupakan aktiviti pelaburan dari luar negara ke dalam sesebuah negara tertentu dan membolehkan pelabur tersebut mengawal terhadap aset-aset yang dimiliki di negara berkenaan. Terdapat 2 jenis pelaburan langsung:\n  a) GREENFIELD: Memulakan pelaburan dengan mengadakan peralatan atau kemudahan baharu atau menambahkan bilangan yang sedia ada di negara membangun.\n  b) PENGGABUNGAN DAN PENGAMBILALIHAN: Penggabungan dengan syarikat dari negara luar berlaku apabila aset-aset dan operasi dari sesebuah negara digabungkan untuk menubuhkan satu entiti perniagaan yang baharu. Pengambilalihan merentasi sempadan berlaku apabila kawalan ke atas aset dan operasi dipindahkan dari syarikat tempatan kepada syarikat dari negara luar."
      },
      {
        id: 4,
        soalan: "JELASKAN KONSEP PERNIAGAAN ANTARABANGSA",
        jawapan: "Pasaran Menimbul: Pasaran Menimbul adalah sebuah negara yang berusaha untuk berubah dan memperbaiki sektor ekonominya dengan tujuan mempertingkatkan prestasi seimbang dengan negara-negara yang lebih maju.\nGlobalisasi: Pembentukan operasi syarikat di serata tempat di dunia di samping membangunkan standard produk dan kaedah pemasaran.\nLokalisasi: Bermaksud usaha mengubah subsidiari daripada organisasi asing ke dalam organisasi kebangsaan atau tempatan."
      },
      {
        id: 5,
        soalan: "APAKAH MNC (Syarikat Multinasional)",
        jawapan: "Syarikat multinasional ialah syarikat besar yang beroperasi dengan cawangan-cawangannya terdapat di beberapa buah negara."
      },
      {
        id: 6,
        soalan: "APAKAH TUJUAN MNC",
        jawapan: "1. Meningkatkan jualan dan keuntungan: Sebuah organisasi akan berusaha meningkatkan jualan yang lebih tinggi dengan meninggikan daya saing domestik.\n2. Meluaskan Operasi: Kebergantungan kepada pasaran yang sedia ada menyebabkan syarikat meluaskan operasi ke negara lain.\n3. Memperoleh syer pasaran global: Melalui cara ini, syarikat secara tidak langsung memperoleh syer pasaran global."
      },
      {
        id: 7,
        soalan: "APAKAH CABARAN MNC",
        jawapan: "Struktur Organisasi: Struktur merujuk kepada struktur organisasi yang akan diubahsuai mengikut cara sesebuah organisasi itu beroperasi di tempat yang berbeza.\nKawalan Pengurusan: Pendekatan kawalan yang boleh diamalkan: Centralization (Pemusatan kuasa) atau Decentralization (Pemencaran).\nPolitik: Syarikat multinasional mestilah mengkaji terlebih dahulu sistem politik negara yang akan dimasuki.\nPerundangan: Undang-undang yang dipakai oleh negara asing memberikan cabaran kepada syarikat multinasional dalam menjalankan perniagaan di negara tersebut.\nEkonomi: Merujuk kepada keadaan ekonomi di mana perniagaan beroperasi.\nSosiobudaya: Kombinasi lebih daripada dua budaya yang berlainan yang menyebabkan kesukaran dalam mengadaptasikan sesuatu budaya yang bukan menjadi kebiasaan diri."
      },
      {
        id: 8,
        soalan: "APAKAH PERANAN GALAKAN PEMASARAN ANTARABANGSA",
        jawapan: "MITI (Kementerian ini diberi tanggungjawab menyelia kegiatan perdagangan yang dijalankan oleh Malaysia seperti import dan eksport):\n- Merangka dasar dan strategi pembangunan perindustrian.\n- Merancang dan menggalak pembangunan prestasi eksport Malaysia di pasaran antarabangsa.\n- Merancang, menyelaras dan mengesan pembangunan perusahaan-perusahaan kecil dan sederhana.\n- Memastikan negara mendapat faedah yang maksimum daripada institusi pembuatan.\n\nMATRADE (Merupakan satu agensi / badan berkanun promosi perdagangan luar negara):\n- Merangka dan melaksanakan strategi pemasaran.\n- Menyediakan sistem maklumat pasaran yang menyeluruh.\n- Memastikan keupayaan bersaing di peringkat antarabangsa bagi keluaran Malaysia.\n- Membangunkan, mempromosikan dan memberikan khidmat nasihat berkaitan dengan perdagangan."
      },
      {
        id: 9,
        soalan: "JELASKAN BLOK PERDAGANGAN",
        jawapan: "AFTA: Meningkatkan perdagangan di rantau ASEAN dengan melaksanakan pasaran bebas.\nNAFTA: Bertujuan meningkatkan kegiatan ekonomi, mengatur keseimbangan eksport dan import serta mengusahakan produk perdagangan yang standard.\nEU: Galakan perdagangan untuk menjadikan satu pasaran (single market) yang memansuhkan semua sekatan dan membentuk satu kesatuan ekonomi sepenuhnya.\nASEAN: Bertujuan untuk menggalakkan keamanan dengan bantuan yang akan diberikan antara kalangan negara anggota."
      },
      {
        id: 10,
        soalan: "JELASKAN KEMPEN KERAJAAN",
        jawapan: "Zon Perdagangan Bebas: Merupakan wilayah dalam sesebuah negara yang melupuskan beberapa halangan perdagangan seperti tariff dan kuota untuk menarik pelaburan asing baru.\nTaraf Perintis: Pengecualian cukai terhadap keuntungan pengeluar dikenakan selama beberapa tahun apabila syarikat memulakan operasi.\nPembiayaan Eksport: Skim ini memberi kemudahan kepada pengeksport untuk mendapatkan dana segera bagi mengeksport produk.\nPengecualian Cukai: Kelonggaran untuk tidak membayar cukai seperti yang ditetapkan oleh pihak berkuasa."
      },
      {
        id: 11,
        soalan: "JELASKAN OBJEKTIF PERLINDUNGAN PERDAGANGAN ANTARABANGSA",
        jawapan: "Melindungi industri penting: Melalui sekatan seperti kuota dan tarif, barangan import dapat dikurangkan.\nMenggalakkan perkembangan industri baru: Perlindungan perdagangan dapat melindungi industri yang belum mencapai tahap kecekapan.\nMengatasi imbangan pembayaran negatif: Barangan import yang kurang menyebabkan aliran wang keluar negara berkurangan.\nMenjamin peluang pekerjaan: Industri tempatan yang berkembang akibat kurangnya persaingan barang import menjamin peluang pekerjaan."
      },
      {
        id: 12,
        soalan: "JELASKAN KAEDAH PERLINDUNGAN PASARAN DOMESTIK",
        jawapan: "Tarif: Tarif bermaksud cukai kerajaan yang dikenakan terhadap barangan yang dibawa masuk atau dihantar ke dalam dan ke luar negeri.\nBukan Tarif:\nKuota: Had yang dikenakan terhadap jumlah unit atau nilai sesuatu barangan yang boleh dikeluarkan atau digunakan atau diimport.\nEmbargo: Larangan kerajaan secara rasmi untuk mengimport atau mengeksport sesuatu barangan atau perkhidmatan dari / ke sesebuah negara.\nSubsidi: Merupakan jumlah bayaran terus kepada pengeluar untuk mengurangkan bebanan kos.\nPiawai Keselamatan & Kesihatan Produk: Satu standard kualiti yang dikenakan ke atas produk yang ingin dipasarkan di peringkat antarabangsa."
      },
    ]
  },
  {
    id: 'bab7',
    title: 'BAB 7: Etika Perniagaan & Tanggungjawab Sosial',
    cards: [
      {
        id: 1,
        soalan: "MAKSUD ETIKA PERNIAGAAN",
        jawapan: "Prinsip-prinsip dan standard yang dijadikan sebagai panduan oleh individu dan kumpulan dalam dunia perniagaan.\nKajian ke atas tingkah laku moral yang menghasilkan peraturan dan prinsip dalam situasi perniagaan.\nSatu set nilai dan peraturan yang menerangkan perlakuan betul atau salah seseorang peniaga dalam menjalankan aktiviti perniagaan."
      },
      {
        id: 2,
        soalan: "JELASKAN PENDEKATAN TINDAKAN BERETIKA",
        jawapan: "Pendekatan Utilitarian: Pendekatan ini menyatakan bahawa akibat dari sesuatu tindakan yang diambil dapat memberi faedah atau manfaat terbaik kepada bilangan orang yang lebih ramai.\nPendekatan Individualisme: Prinsip ini menyatakan yang seseorang individu berhak untuk bertindak mengikut sesuatu cara yang difikirkan betul.\nPendekatan Hak Moral: Individu mempunyai hak untuk dilindungi, memiliki kehidupan yang selamat dan tidak boleh diancam oleh mana-mana pihak.\nPendekatan Keadilan: Pendekatan ini menilai keputusan dan kelakuan pengurus syarikat tentang sejauh mana keadilan mereka membahagikan ganjaran dan perbelanjaan di antara individu, kumpulan atau organisasi."
      },
      {
        id: 3,
        soalan: "JELASKAN MENGURUS ETIKA PERNIAGAAN",
        jawapan: "Pendidikan Nilai Murni: Penerapan nilai-nilai murni dalam kehidupan bermula sama ada secara formal (sekolah, universiti) atau tidak formal (keluarga atau masyarakat).\nSistem Perundangan: Sistem perundangan dan Badan Kehakiman Negara yang sistematik and baik, berfungsi untuk mengawal tingkahlaku dan tindakan manusia supaya sentiasa mengamalkan nilai-nilai yang beretika di sisi undang-undang.\nSistem Aduan Awam: Sistem aduan awam diwujudkan bertujuan menyediakan saluran kepada rakyat untuk melaporkan tindakan yang tidak beretika yang telah dilakukan oleh individu atau pihak tertentu seperti agensi-agensi kerajaan, badan-badan berkanun, pertubuhan dll.\nPemecah Rahsia / Whistleblowers: Menyediakan saluran dan sokongan kepada anggota organisasi yang ingin mendedahkan sebarang amalan tidak beretika yang wujud."
      },
      {
        id: 4,
        soalan: "JELASKAN TANGGUNGJAWAB SOSIAL TERHADAP PIHAK BERKEPENTINGAN",
        jawapan: "Tanggungjawab Sosial Terhadap Pengguna: Membekalkan label yang menyatakan maklumat tentang kualiti & kegunaan produk dengan tepat, dapat difahami dan tidak mengelirukan pengguna.\nTanggungjawab Sosial Terhadap Pekerja: Jaminan kesihatan, tempat kerja yang selamat dan perlindungan keselamatan semasa bekerja.\nTanggungjawab Sosial Terhadap Komuniti: Mewujudkan peluang pekerjaan kepada penduduk setempat. Berusaha untuk membangunkan dan memakmurkan komuniti setempat.\nTanggungjawab Sosial Terhadap Pelabur: Memastikan pulangan yang baik terhadap pelaburan yang dibuat melalui kegiatan yang menguntungkan melalui pembayaran dividen.\nTanggungjawab Sosial Terhadap Kerajaan: Menyokong dasar kerajaan serta mengambil bahagian dalam pelbagai program yang dianjurkan oleh kerajaan. (kempen kitar semula).\nTanggungjawab Sosial Terhadap Pembiaya: Memastikan syarikat mempunyai sumber kewangan yang cukup untuk membayar balik pinjaman.\nTanggungjawab Sosial Terhadap Pembekal: Memastikan semua syarat kontrak dipersetujui dan dipatuhi.\nTanggungjawab Sosial Terhadap Pesaing: Melaksanakan amalan persaingan yang sihat.\nTanggungjawab Sosial Terhadap Pihak Pengurusan: Memberi ganjaran kepada pekerja secara adil saksama untuk tingkatkan motivasi."
      },
      {
        id: 5,
        soalan: "JELASKAN TANGGUNGJAWAB SOSIAL KORPORAT",
        jawapan: "Proaktif: Kepentingan umum akan dipelajari dan dipenuhi tanpa menunggu tekanan daripada mana-mana pihak yang berkepentingan.\nDefensif: Organisasi akan mengakui sebahagian daripada kesalahannya jika dituntut oleh mana-mana pihak berkepentingan.\nPemudahcara: Menerima tanggungjawab sosial sebagai salah satu tanggungjawab yang perlu disempurnakan (secara minima)."
      }
    ]
  }
];
