/**
 * PORTFOLIO_DATA
 * Dataset detail project untuk halaman detail (project-detail.html)
 * Mendukung bilingual (Indonesia & English)
 */
const PORTFOLIO_DATA = {
  projects: [
    {
      id: "garudafood-financial-dashboard",
      name: "Executive Dashboard Keuangan & Rekonsiliasi Kas Depo",
      name_en: "Executive Financial & Cash Reconciliation Depo Dashboard",
      company: "PT Sinar Niaga Sejahtera (Garudafood) - Depo Garut",
      desc: "Dashboard eksekutif pemantauan arus kas harian, penyerapan dana Head Office, rasio biaya operasional, dan audit rekonsiliasi kas Depo Garut.",
      desc_en: "Executive monitoring dashboard for daily cash flow, Head Office funds absorption, operating expense ratios, and cash reconciliation audit.",
      category: "Data Analyst / Data Scientist",
      status: "Selesai & Aktif",
      status_en: "Completed & Active",
      date: "Agustus 2026",
      technologies: ["BOSNET", "Python", "Financial Analytics", "Looker Studio", "Auditing", "Cash Flow"],
      thumbnail: "dashbaord-projek/garudafood-executive-dashboard.jpg",
      detail: {
        summary: "Dashboard pemantauan eksekutif keuangan operasional dan rekonsiliasi arus kas harian Depo Garut PT Sinar Niaga Sejahtera (Garudafood). Mengintegrasikan transaksi BOSNET untuk memastikan kepatuhan anggaran, memantau rasio biaya operasional, mendeteksi risiko dana mengendap, serta mengevaluasi performa penyetor lapangan.",
        summary_en: "Executive monitoring dashboard for operational financial cash flow and daily cash reconciliation at Depo Garut, PT Sinar Niaga Sejahtera (Garudafood). Integrates transactional BOSNET records to ensure budget compliance, monitor cost ratios, detect uncollected cash risks, and evaluate field collector performance.",
        background: "Sebagai distributor utama FMCG, PT Sinar Niaga Sejahtera mengelola volume perputaran kas harian yang sangat tinggi dari puluhan rute armada pengiriman. Diperlukan pengawasan terpusat agar arus kas masuk dari kasir/bank, penyetoran HO (Head Office), dan pemakaian kas kecil (petty cash) dapat terpantau secara real-time dan bebas dari selisih.",
        background_en: "As a major FMCG distribution arm, PT Sinar Niaga Sejahtera manages high-volume daily cash flows across numerous delivery logistics routes. Centralized monitoring was required to track cash inflows from cashiers/banks, HO transfers, and petty cash expenditures in real-time with zero discrepancy.",
        problem: "Pencatatan kas manual rentan terhadap keterlambatan pelaporan, risiko dana mengendap (cash belum disweeping), ketidaksesuaian pos pengeluaran armada (BBM, tol, retribusi pengiriman), serta lambatnya deteksi lonjakan rasio biaya operasional terhadap total penerimaan.",
        problem_en: "Manual financial recording risked reporting delays, un-swept floating cash risks, delivery route expense misallocations (fuel, toll, delivery fees), and delayed detection of operating expense ratio spikes.",
        goal: "Membangun dashboard analitik eksekutif dengan 100% akurasi rekonsiliasi audit, visibilitas arus kas harian, deteksi dini dana berisiko, dan rekomendasi efisiensi pengeluaran kas kecil cabang.",
        goal_en: "Develop an executive analytics dashboard achieving 100% reconciliation match, daily cash visibility, early risk detection, and branch petty cash spending optimization.",
        workflow: [
          "Ekstraksi dan agregasi data transaksi harian sistem BOSNET",
          "Pembersihan data transaksi perbankan, kas besar, dan kas kecil",
          "Penyusunan model data arus kas (cash inflow vs operational outflow)",
          "Perhitungan metrik KPI: Rasio Beban (Target < 15%), Tingkat Penyerapan HO, dan Dana Mengendap",
          "Visualisasi interaktif grafik kesehatan arus kas dan ranking kinerja staf",
          "Implementasi sistem alert dini untuk anomali pengeluaran dan rekomendasi manajemen"
        ],
        workflow_en: [
          "Extraction and aggregation of daily BOSNET transactional records",
          "Data cleansing of banking, petty cash, and main cash logs",
          "Cash flow modeling (inflow vs operating outflow)",
          "KPI metric calculation: Expense Ratio (Target < 15%), HO Absorption Rate, and Floating Cash Risk",
          "Interactive visualization of cash health trends and staff performance ranking",
          "Implementation of early alert systems for expense anomalies and management action plans"
        ],
        features: [
          "Ringkasan Eksekutif Arus Kas (Uang Masuk, Transfer HO, Beban Operasional)",
          "Indikator Kesehatan Arus Kas Dinamis (Selisih Area Hijau vs Garis Beban Merah)",
          "Breakdown Pos Pengeluaran Terbesar (Retribusi Pengiriman, BBM, Tol & Parkir, Konsumsi)",
          "Pelacakan Performa 3 Penyetor Terbesar Kinerja Lapangan",
          "Peringatan Beban & Anomali Pemakaian Dana oleh Staf",
          "Modul Audit & 100% Rekonsiliasi Otomatis Data Transaksi"
        ],
        features_en: [
          "Executive Cash Flow Summary (Inflows, HO Transfers, Operating Expenses)",
          "Dynamic Cash Health Indicator (Green Area Margin vs Red Expense Threshold)",
          "Top Expense Category Breakdown (Delivery Fees, Fuel, Toll & Parking, Meals)",
          "Performance Tracking for Top Field Depositors",
          "Early Warning Alerts for High Staff Operational Spending",
          "Audit & 100% Transactional Reconciliation Match Module"
        ],
        challenges: "Mengharmonisasikan data transaksi multi-sumber dari sistem BOSNET, rekening koran bank, dan pencatatan kas fisik harian dengan tingkat toleransi error 0%.",
        challenges_en: "Harmonizing multi-source transaction data across BOSNET, bank statements, and physical cash counts with 0% error tolerance.",
        solution: "Merancang pipeline validasi otomatis dengan aturan rekonsiliasi ketat yang memetakan nomor referensi transaksi harian dan langsung menandai inkonsistensi ke dalam antrean audit.",
        solution_en: "Designed an automated validation pipeline with strict reconciliation rules mapping transaction reference numbers and instantly flagging anomalies into an audit queue.",
        role: "Data Analyst Intern — Bertanggung jawab penuh dalam pemrosesan data, validasi BOSNET, pemodelan keuangan, perancangan dashboard, serta penyusunan insight strategis bagi manajemen.",
        role_en: "Data Analyst Intern — Fully responsible for data processing, BOSNET validation, financial modeling, dashboard design, and strategic management insight generation.",
        results: "Mencapai 100% Match Rekonsiliasi Audit data, mempertahankan Rasio Beban Operasional di level 1.16% (jauh di bawah batas toleransi 15%), dan memangkas waktu verifikasi harian hingga 60%.",
        results_en: "Achieved 100% Reconciliation Audit Match, maintained Operating Expense Ratio at 1.16% (well below the 15% tolerance ceiling), and reduced daily verification time by 60%.",
        insight: "Pengawasan arus kas granular harian yang dipadukan dengan identifikasi risiko dana mengendap secara proaktif mampu meningkatkan disiplin likuiditas cabang dan mencegah potensi kerugian operasional.",
        insight_en: "Granular daily cash monitoring coupled with proactive floating cash risk detection significantly strengthens branch liquidity discipline and safeguards against operational leakage.",
        gallery: [
          "dashbaord-projek/garudafood-executive-dashboard.jpg"
        ]
      },
      links: {
        demo: "",
        github: ""
      }
    },
    {
      id: "bakso-sedjahtera-predictive-analysis",
      name: "Sales Predictive Analysis & Machine Learning Forecasting",
      name_en: "Sales Predictive Analysis & Machine Learning Forecasting",
      company: "Bakso Sedjahtera (PT Sedjahtera Boga Kreasi)",
      desc: "Model peramalan penjualan time-series berbasis Prophet Machine Learning untuk memproyeksikan volume transaksi 30 hari ke depan, analisis void, dan optimasi stok F&B.",
      desc_en: "Time-series sales forecasting powered by Prophet Machine Learning predicting 30-day transaction volume, void analysis, and F&B inventory optimization.",
      category: "Data Analyst / Data Scientist",
      status: "Selesai",
      status_en: "Completed",
      date: "Juli 2026",
      technologies: ["Python", "Prophet ML", "Time Series", "Scikit-Learn", "Data Preprocessing", "Streamlit"],
      thumbnail: "dashbaord-projek/bakso-sedjahtera-predictive-analysis.jpg",
      detail: {
        summary: "Sistem analitik prediktif dan peramalan tren penjualan berbasis model Machine Learning (Facebook Prophet) untuk jaringan restoran Bakso Sedjahtera. Memprediksi jumlah transaksi harian/mingguan hingga horizon 30 hari ke depan, mengidentifikasi pola musiman bulanan, serta memetakan faktor risiko void dan preferensi metode pembayaran.",
        summary_en: "Predictive analytics and sales forecasting system powered by Machine Learning (Facebook Prophet) for the Bakso Sedjahtera restaurant chain. Forecasts daily/weekly transaction counts over a 30-day horizon, identifies seasonal trends, and analyzes order cancellation (void) risks and payment methods.",
        background: "Bisnis F&B dengan banyak cabang outlet memerlukan estimasi penjualan akurat untuk mengoptimalkan persiapan stok bahan baku segar, alokasi jam kerja staf shift, dan meminimalkan kerugian akibat sisa makanan (waste) atau kehabisan stok (stockout).",
        background_en: "Multi-outlet F&B operations require accurate sales projections to optimize fresh perishable inventory planning, manage shift scheduling, and prevent food waste or stockouts.",
        problem: "Fluktuasi pesanan yang drastis antara sesi siang dan malam serta perbedaan karakteristik antar outlet menyebabkan estimasi manual sering meleset, berdampak pada inefisiensi pengadaan bahan dan pemborosan operasional.",
        problem_en: "Sharp order volatility between lunch and dinner sessions as well as cross-outlet variance caused manual estimations to fail, resulting in procurement waste and operational inefficiency.",
        goal: "Membangun model time-series forecasting dengan akurasi terukur (>75%) untuk meramalkan volume transaksi 30 hari ke depan, mendukung keputusan rantai pasok cerdas dan alokasi sumber daya outlet.",
        goal_en: "Build a measurable time-series forecasting model (>75% accuracy) predicting 30-day transaction volume to support intelligent supply chain and staffing decisions.",
        workflow: [
          "Pengumpulan dan penggabungan log transaksi penjualan dari seluruh cabang outlet",
          "Pembersihan data, penanganan data hilang, dan standarisasi format timestamp",
          "Feature engineering: pembuatan variabel sesi (siang/malam), hari libur nasional, dan hari kerja",
          "Pelatihan dan tuning hyperparameter model Machine Learning Facebook Prophet",
          "Evaluasi performa model dengan metrik MAPE, RMSE, dan Akurasi Terpilih (76.01%)",
          "Pengembangan dashboard visualisasi aktual vs prediksi, distribusi outlet, dan analisis void"
        ],
        workflow_en: [
          "Aggregation of multi-outlet sales transaction logs",
          "Data preprocessing, missing value handling, and timestamp normalization",
          "Feature engineering: shift session indicators (morning/lunch/evening), holidays, and day-of-week",
          "Training and hyperparameter tuning of Facebook Prophet time-series models",
          "Evaluation using MAPE, RMSE, and model accuracy benchmarks (76.01%)",
          "Development of interactive actual-vs-predicted dashboards, outlet distribution, and void analytics"
        ],
        features: [
          "Proyeksi Tren Transaksi Aktual vs Prediksi dengan Interval Kepercayaan",
          "Prediksi Horizon Kustom (30 Hari ke Depan) per Sesi dan Outlet",
          "Model Evaluasi Akurasi Terpilih (76.01% pada Outlet Ayam Mirasa Dihati - Siang)",
          "Distribusi Volume Prediksi per Jaringan Outlet (Donut Breakdown)",
          "Analisis Musiman Siklus Mingguan (Senin-Minggu) dan Pola Bulanan",
          "Simulasi Analitik Pembatalan (Top 5 Produk Void, Alasan Void, & Metode Pembayaran)"
        ],
        features_en: [
          "Actual vs Predicted Transaction Trend with Confidence Bands",
          "Custom 30-Day Forecasting Horizon per Session and Outlet",
          "Model Accuracy Evaluator (76.01% on Selected Benchmark Outlet & Session)",
          "Outlet-wise Predicted Volume Distribution Breakdown",
          "Weekly and Monthly Seasonality Pattern Insights",
          "Cancellation Analytics Simulation (Top 5 Voided Items, Void Reasons, & Payment Methods)"
        ],
        challenges: "Pola penjualan makanan sangat dipengaruhi oleh hari libur, cuaca, dan fenomena gajian (payday), sehingga model time-series standar sering overfit atau gagal menangkap lonjakan mendadak.",
        challenges_en: "Food sales patterns are strongly impacted by holidays, weather, and payday spikes, causing baseline models to overfit or miss sudden volume shifts.",
        solution: "Memanfaatkan Facebook Prophet dengan integrasi kalender hari libur Indonesia dan efek musiman berganda (multiplicative seasonality) untuk sesi siang vs malam.",
        solution_en: "Leveraged Facebook Prophet incorporating Indonesian public holidays and multiplicative seasonality across lunch and evening sessions.",
        role: "Data Analyst Intern — Mengembangkan pipeline preprocessing data, memprogram model prediksi machine learning di Python, dan mendesain UI dashboard analytics.",
        role_en: "Data Analyst Intern — Developed data preprocessing pipelines, programmed machine learning forecasting models in Python, and crafted interactive analytics dashboards.",
        results: "Mencapai akurasi model peramalan 76.01%, memberikan visibilitas proyeksi bahan baku 30 hari ke depan, dan mengurangi deviasi persiapan stok hingga 25%.",
        results_en: "Achieved 76.01% model forecast accuracy, provided 30-day raw material projection visibility, and decreased inventory prep variance by 25%.",
        insight: "Mengombinasikan prediksi kuantitatif dengan analisis akar masalah pembatalan (void) menghasilkan strategi operasional yang jauh lebih komprehensif bagi efisiensi bisnis restoran.",
        insight_en: "Combining quantitative forecasting with cancellation (void) root-cause analysis produces a far more comprehensive operational strategy for restaurant chain efficiency.",
        gallery: [
          "dashbaord-projek/bakso-sedjahtera-predictive-analysis.jpg",
          "dashbaord-projek/bakso-sedjahtera-trend-sales.jpg",
          "dashbaord-projek/bakso-sedjahtera-sales-void.jpg"
        ]
      },
      links: {
        demo: "",
        github: ""
      }
    },
    {
      id: "bakso-sedjahtera-trend-sales",
      name: "Interactive Trend Sales & Order Density Analytics",
      name_en: "Interactive Trend Sales & Order Density Analytics",
      company: "Bakso Sedjahtera (PT Sedjahtera Boga Kreasi)",
      desc: "Dashboard analitik performa penjualan tahunan, kurva kepadatan transaksi jam sibuk, perbandingan weekday vs weekend, dan evaluasi outlet.",
      desc_en: "Annual sales performance analytics dashboard, rush hour density curves, weekday vs weekend volume dynamics, and outlet performance evaluation.",
      category: "Data Analyst / Data Scientist",
      status: "Selesai",
      status_en: "Completed",
      date: "Juli 2026",
      technologies: ["Looker Studio", "Exploratory Data Analysis", "SQL", "Data Modeling", "Business Intelligence"],
      thumbnail: "dashbaord-projek/bakso-sedjahtera-trend-sales.jpg",
      detail: {
        summary: "Dashboard Business Intelligence komprehensif untuk memonitor tren penjualan tahunan, kepadatan pesanan jam-per-jam, dan perbandingan aktivitas hari kerja (weekday) vs hari libur (weekend) pada jaringan Bakso Sedjahtera (Periode Juni 2025 - Juni 2026).",
        summary_en: "Comprehensive Business Intelligence dashboard monitoring annual sales trends, hourly order density, and weekday vs weekend volume dynamics across the Bakso Sedjahtera network (June 2025 - June 2026).",
        background: "Perusahaan ingin mengetahui jadwal kebutuhan penambahan kru (crew) yang pasti untuk optimalisasi proses shifting kerja. Ketika di jam-jam tertentu volume pelanggan sedang ramai memuncak, alokasi kru harus diperbanyak di jam tersebut. Selain itu, jadwal pergantian shift staf perlu diatur secara presisi agar tidak terjadi di tengah puncak jam sibuk (rush hour), melainkan dialokasikan pada saat kondisi outlet sedang relatif senggang sehingga alur pelayanan tetap lancar tanpa hambatan.",
        background_en: "The company required precise insights into crew scheduling and operational shift planning. During peak customer volume windows, adequate crew deployment is essential. Furthermore, staff shift handovers needed to be timed strategically during lull periods rather than during high-pressure rush hours to ensure seamless, uninterrupted customer service.",
        problem: "Data transaksi tersimpan secara terisolasi di database kasir POS dan tidak memberikan wawasan visual mengenai jam-jam sibuk (rush hours), menyebabkan ketidakseimbangan jumlah staf yang bertugas serta jadwal pergantian shift yang sering berbenturan dengan waktu kedatangan pelanggan dalam jumlah besar.",
        problem_en: "POS transaction records remained siloed without visual insights into rush hours, causing imbalances in staff deployment and shift transitions clashing with peak customer arrival times.",
        goal: "Menyajikan dashboard visual yang interaktif dengan filter multi-dimensi (Hari, Bulan, Waktu, Tahun, Lokasi Outlet) untuk mengoptimalkan operasional, penjadwalan shifting kru, dan alokasi staf di jam sibuk.",
        goal_en: "Provide an interactive visual dashboard with multi-dimensional filters (Day, Month, Hour, Year, Outlet) optimizing operations, crew shift scheduling, and peak-hour staffing allocation.",
        workflow: [
          "Ekstraksi jutaan baris transaksi kasir POS selama rentang 1 tahun penuh",
          "Transformasi data: konversi timestamp ke jam, hari dalam seminggu, dan flag hari libur",
          "Kompilasi metrik agregasi: Total Transaksi, Rata-rata Transaksi, dan Pemesanan Tertinggi",
          "Penyusunan kurva kepadatan transaksi berdasarkan waktu (pukul 09.00 s/d 22.00)",
          "Pembuatan visualisasi distribusi weekday (59.1%) vs weekend (40.9%) dan tren bulanan",
          "Penerapan slicer filter interaktif untuk eksplorasi data yang fleksibel bagi manajemen"
        ],
        workflow_en: [
          "Extraction of 1 year POS transaction logs",
          "Data transformation: converting timestamps to hours, day of week, and holiday flags",
          "Aggregation metrics computation: Total Transactions, Average Value, Peak Orders",
          "Charting hourly density curves across operating hours (09:00 to 22:00)",
          "Visualizing weekday (59.1%) vs weekend (40.9%) distribution and month-by-month trends",
          "Implementing interactive slicers for executive exploratory analysis"
        ],
        features: [
          "Kartu Metrik Utama: Total Transaksi, Rata-rata Transaksi, Pemesanan Tertinggi",
          "Kurva Kepadatan Pesanan Berdasarkan Waktu (09:00 - 22:00 dengan puncak siang & malam)",
          "Grafik Jumlah Transaksi Harian (Senin hingga lonjakan signifikan di hari Minggu)",
          "Pie Chart Proporsi Kepadatan Kerja vs Libur (Weekday 59.1% vs Weekend 40.9%)",
          "Histogram Jumlah Transaksi per Bulan (Monitoring seasonality Januari s/d Desember)",
          "Sistem Filter Slicer Lengkap (Hari, Bulan, Waktu, Tahun, dan Lokasi Outlet)"
        ],
        features_en: [
          "Primary Metric Scorecards: Total Transactions, Average Value, Peak Order",
          "Hourly Order Density Curve (09:00 - 22:00 highlighting lunch and dinner rushes)",
          "Day-of-Week Transaction Volume (tracking steady growth toward Sunday peaks)",
          "Workday vs Holiday Proportion Chart (Weekday 59.1% vs Weekend 40.9%)",
          "Monthly Transaction Volume Histogram (January - December seasonality)",
          "Multi-filter Slicers (Day, Month, Hour, Year, Outlet Location)"
        ],
        challenges: "Memproses data transaksi bervolume besar secara responsif tanpa menurunkan kecepatan rendering dashboard saat berpindah filter outlet.",
        challenges_en: "Processing large transaction datasets responsively without compromising dashboard rendering speed across outlet filters.",
        solution: "Menerapkan skema data star-schema teragregasi yang telah dioptimasi sebelumnya di tingkat database SQL sebelum dihubungkan ke dashboard visual.",
        solution_en: "Implemented an optimized aggregated star-schema at the SQL database layer prior to dashboard ingestion.",
        role: "Data Analyst — Melakukan data aggregation, eksplorasi pola waktu penjualan, dan membangun dashboard visual interaktif berbasis kebutuhan bisnis.",
        role_en: "Data Analyst — Conducted data aggregation, temporal pattern exploration, and designed interactive business-driven dashboards.",
        results: "Mengidentifikasi 2 gelombang rush hour utama (pukul 12.00-13.00 dan 18.00-19.00), membantu manajemen menjadwalkan shift staf secara proporsional dan meningkatkan efisiensi layanan 30%.",
        results_en: "Identified two major daily rush hour waves (12:00-13:00 and 18:00-19:00), enabling optimized staff scheduling and boosting service efficiency by 30%.",
        insight: "Meskipun weekend memiliki rata-rata pesanan lebih padat per harinya, weekday menyumbang 59.1% total volume tahunan, membuktikan pentingnya program loyalitas pada hari kerja.",
        insight_en: "While weekends yield higher single-day intensity, weekdays generate 59.1% of annual volume, emphasizing the importance of weekday customer retention programs.",
        gallery: [
          "dashbaord-projek/bakso-sedjahtera-trend-sales.jpg",
          "dashbaord-projek/bakso-sedjahtera-predictive-analysis.jpg",
          "dashbaord-projek/bakso-sedjahtera-sales-void.jpg"
        ]
      },
      links: {
        demo: "",
        github: ""
      }
    },
    {
      id: "bakso-sedjahtera-sales-void",
      name: "Sales Void & Cancellation Risk Mitigation Dashboard",
      name_en: "Sales Void & Cancellation Risk Mitigation Dashboard",
      company: "Bakso Sedjahtera (PT Sedjahtera Boga Kreasi)",
      desc: "Dashboard audit dan mitigasi risiko pembatalan pesanan (sales void), analisis jam rawan pembatalan, produk paling rentan, dan pemeringkatan outlet.",
      desc_en: "Audit and risk mitigation dashboard for order cancellations (sales void), identifying peak cancellation hours, vulnerable products, and outlet risk rankings.",
      category: "Data Analyst / Data Scientist",
      status: "Selesai",
      status_en: "Completed",
      date: "Juli 2026",
      technologies: ["Root Cause Analysis", "Risk Assessment", "Python", "Looker Studio", "Data Cleaning", "Audit Analytics"],
      thumbnail: "dashbaord-projek/bakso-sedjahtera-sales-void.jpg",
      detail: {
        summary: "Dashboard audit dan mitigasi risiko pembatalan pesanan (sales void) pada jaringan restoran Bakso Sedjahtera. Menganalisis nilai kerugian finansial, frekuensi pembatalan per produk, jam paling rawan pembatalan, kontribusi channel pemesanan, dan pemeringkatan outlet dengan insiden void tertinggi.",
        summary_en: "Audit and risk mitigation dashboard for order cancellations (sales void) across Bakso Sedjahtera outlets. Analyzes financial losses, cancellation frequency by product, high-risk hours, ordering channel contributions, and ranking of outlets with the highest void incidents.",
        background: "Dalam industri F&B, insiden transaksi void (dibatalkan setelah diinput ke POS) merupakan indikator krusial adanya kesalahan kasir, bahan habis mendadak, atau potensi fraud kasir yang berdampak langsung pada selisih pembukuan dan kepuasan pelanggan.",
        background_en: "In the F&B industry, void transactions are vital signals of cashier error, unexpected stock depletion, or cashier leakage directly impacting revenue reconciliation and customer satisfaction.",
        problem: "Tingginya nilai transaksi batal tanpa pencatatan alasan terstruktur menyulitkan manajemen untuk mengetahui apakah pembatalan disebabkan oleh kesalahan dapur, sistem kasir error, atau pembatalan sepihak dari pelanggan.",
        problem_en: "High void volumes without structured reason attribution made it difficult for management to discern whether causes stemmed from kitchen delays, POS glitches, or customer changes.",
        goal: "Menyediakan visibilitas penuh terhadap pola transaksi void, mendeteksi jam dan outlet paling berisiko, serta merumuskan rekomendasi SOP untuk meminimalisir pembatalan hingga di bawah 2%.",
        goal_en: "Provide comprehensive visibility into void transaction patterns, detect high-risk hours and outlets, and establish SOP recommendations to compress cancellation rates below 2%.",
        workflow: [
          "Ekstraksi log pembatalan transaksi dari seluruh terminal POS outlet",
          "Klasifikasi alasan pembatalan: Batal Pesan, Salah Input, Bahan Habis, dan Sistem Error",
          "Perhitungan metrik risiko: Total Nilai Void, Total Kasus Void, dan Jam Rawan Void",
          "Analisis tren nilai pembatalan bulanan untuk mendeteksi lonjakan di bulan-bulan tertentu",
          "Pemetaan Top 5 Produk paling sering dibatalkan dan kontribusi channel (Dine-in, GoFood, GrabFood)",
          "Penyusunan ranking Top 10 outlet dengan kasus void tertinggi sebagai target audit operasional"
        ],
        workflow_en: [
          "Extraction of POS transaction cancellation logs across all branch terminals",
          "Classification of cancellation reasons: Order Cancelled, Wrong Input, Stockout, System Error",
          "Risk metric calculation: Total Void Value, Total Void Incidents, Peak High-Risk Hours",
          "Monthly void value trend analysis to identify abnormal seasonal spikes",
          "Mapping Top 5 frequently voided products and delivery channel contributions (Dine-in, Online delivery)",
          "Compiling Top 10 outlet void incidence ranking for targeted operational auditing"
        ],
        features: [
          "Scorecard Indikator Risiko: Total Nilai Void, Total Kasus Void, Jam Rawan Void (Malam)",
          "Grafik Garis Tren Nilai Pembatalan Transaksi Bulanan per Outlet",
          "Bar Chart Top 5 Produk Berdasarkan Frekuensi Pembatalan",
          "Donut Chart Kontribusi Kasus Void per Kategori Channel Pesanan",
          "Tabel Ranking Top 10 Outlet dengan Tingkat Void Tertinggi Periode Berjalan",
          "Filter Multi-Parameter: Rentang Tanggal, Lokasi Outlet, Sub-Brand, Tipe Pesanan, & Nama Produk"
        ],
        features_en: [
          "Risk Metric Scorecards: Total Void Value, Total Void Cases, Peak Risk Hours (Evening)",
          "Multi-outlet Monthly Void Trend Line Chart",
          "Top 5 Cancelled Menu Items Bar Chart",
          "Channel Contribution Donut Chart for Order Void Categories",
          "Top 10 Outlet Void Frequency Leaderboard",
          "Multi-parameter Filter Bar: Date Range, Outlet Location, Sub-Brand, Order Type, Product"
        ],
        challenges: "Mengelompokkan data pembatalan yang sebagian besar memiliki catatan bebas manual dari staf kasir menjadi kategori risiko yang terstandarisasi.",
        challenges_en: "Transforming unstructured free-text cashier reason notes into standardized risk categories.",
        solution: "Membangun modul NLP text-matching di Python untuk mengelompokkan teks alasan pembatalan secara otomatis ke dalam 4 kategori baku operasional.",
        solution_en: "Engineered an automated NLP text-matching script in Python categorizing unstructured void descriptions into 4 standardized operational buckets.",
        role: "Data Analyst — Menganalisis pola anomali transaksi kasir, membangun model kategorisasi void, dan merancang dashboard audit risiko penjualan.",
        role_en: "Data Analyst — Analyzed transaction anomaly patterns, engineered void categorization models, and designed risk audit dashboards.",
        results: "Berhasil mengungkap bahwa jam malam dan kategori menu tertentu menyumbang mayoritas pembatalan akibat kehabisan bahan, memicu revisi SOP restock dapur harian.",
        results_en: "Discovered evening sessions and specific menu items accounted for the majority of voids due to stock depletion, prompting proactive kitchen restocking SOP revisions.",
        insight: "Transparansi data void bukan sekadar untuk mencegah kecurangan, melainkan cermin utama kelemahan manajemen stok dapur dan kecepatan pelayanan staf kasir.",
        insight_en: "Void data transparency is not merely a fraud deterrent; it is a primary mirror revealing kitchen stock readiness and front-of-house cashier speed.",
        gallery: [
          "dashbaord-projek/bakso-sedjahtera-sales-void.jpg",
          "dashbaord-projek/bakso-sedjahtera-trend-sales.jpg"
        ]
      },
      links: {
        demo: "",
        github: ""
      }
    },
    {
      id: "sales-performance-insight-dashboard",
      name: "Dashboard Analisis Kinerja Penjualan",
      name_en: "Sales Performance Insight Dashboard",
      company: "Performance Insight Dashboard — Looker Studio",
      desc: "Dashboard analisis kinerja penjualan menggunakan Looker Studio untuk memonitor metrik bisnis dan tren.",
      desc_en: "Sales performance analysis dashboard built with Looker Studio to monitor business metrics, budget allocation, ROAS, and trends.",
      category: "Data Analyst / Data Scientist",
      status: "Selesai",
      status_en: "Completed",
      date: "Dec 2025",
      technologies: ["Looker Studio", "Google Data Studio", "SQL", "Google Sheets", "Sales Analytics", "ROAS"],
      thumbnail: "dashbaord-projek/performance-insight-dashboard.png",
      detail: {
        summary: "Merancang dan mengembangkan dashboard analisis kinerja penjualan interaktif menggunakan Looker Studio (Google Data Studio).",
        summary_en: "Designed and developed an interactive sales performance analytics dashboard using Looker Studio (Google Data Studio).",
        background: "Kebutuhan akan dashboard yang dapat menampilkan metrik bisnis secara real-time dan mudah diakses oleh tim manajemen.",
        background_en: "The requirement for a dashboard capable of displaying real-time business metrics that are easily accessible to the management team.",
        problem: "Data penjualan tidak tervisualisasi dengan baik dan laporan masih manual menggunakan Excel yang memakan waktu.",
        problem_en: "Sales data was not well-visualized and reporting was still done manually using Excel, which was time-consuming.",
        goal: "Menyediakan dashboard interaktif yang mudah dipahami dan diakses oleh tim manajemen untuk monitoring kinerja penjualan.",
        goal_en: "Provide an intuitive and accessible interactive dashboard for the management team to monitor sales performance.",
        workflow: [
          "Pengumpulan dan konsolidasi data dari berbagai sumber (SQL, Google Sheets)",
          "Data cleaning & transformation menggunakan SQL",
          "Perancangan visualisasi dan dashboard di Looker Studio",
          "Implementasi filter interaktif dan parameter",
          "Scheduling auto-refresh data",
          "Testing dan deployment ke tim manajemen"
        ],
        workflow_en: [
          "Data collection and consolidation from multiple sources (SQL, Google Sheets)",
          "Data cleaning & transformation using SQL",
          "Visualization design and dashboard development in Looker Studio",
          "Implementation of interactive filters and parameters",
          "Scheduling automated data refreshes",
          "Validation testing and deployment to the management team"
        ],
        features: [
          "Monitoring KPI utama (Revenue, Orders, Conversion Rate)",
          "Tren penjualan per periode (harian/mingguan/bulanan)",
          "Segmentasi pelanggan dan analisis RFM",
          "Filter interaktif berdasarkan region, produk, dan waktu",
          "Auto-refresh data real-time dari database",
          "Export report ke PDF untuk presentasi"
        ],
        features_en: [
          "Primary KPI monitoring (Revenue, Orders, Conversion Rate)",
          "Sales trends per period (daily/weekly/monthly)",
          "Customer segmentation and RFM analysis",
          "Interactive filters by region, product, and time range",
          "Real-time automated data refreshes from database",
          "Export report to PDF for presentations"
        ],
        challenges: "Menggabungkan data dari beberapa sumber yang berbeda (SQL dan Google Sheets) dengan format yang tidak konsisten.",
        challenges_en: "Combining data from multiple disparate sources (SQL and Google Sheets) with inconsistent formatting.",
        solution: "Menggunakan SQL query untuk mengkonsolidasikan dan menstandarkan data sebelum divisualisasi di Looker Studio.",
        solution_en: "Using SQL queries to consolidate and standardize datasets before visualizing in Looker Studio.",
        role: "Data Analyst — Desain dan implementasi dashboard menggunakan Looker Studio.",
        role_en: "Data Analyst — Design and implementation of the dashboard using Looker Studio.",
        results: "Dashboard menjadi alat utama monitoring penjualan tim manajemen dan menghemat waktu pelaporan hingga 60%.",
        results_en: "The dashboard became the primary sales monitoring tool for executive management, saving reporting time by up to 60%.",
        insight: "Looker Studio sangat powerful untuk membuat dashboard yang mudah diakses dan dipahami oleh tim non-teknis.",
        insight_en: "Looker Studio is very powerful for creating dashboards that are easy to access and understand for non-technical teams.",
        gallery: [
          "dashbaord-projek/performance-insight-dashboard.png"
        ]
      },
      links: {
        demo: "",
        github: ""
      }
    },
    {
      id: "layanan-desa",
      name: "Layanan Desa - Village Public Service Website",
      name_en: "Village Public Service Website",
      company: "Desa Banyuresmi Project",
      desc: "Pengembangan frontend website layanan publik desa untuk transparansi informasi, pengumuman warga, dan berita aktual desa.",
      desc_en: "Frontend web development for village public services, civic announcements, and community news delivery.",
      category: "Web",
      status: "Selesai",
      status_en: "Completed",
      date: "Juni 2024",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
      thumbnail: "assets/img/portfolio/layanan_desa.png",
      detail: {
        summary: "Platform website informasi layanan publik desa yang memudahkan warga dalam mengakses administrasi kependudukan, pengumuman desa, dan berita pembangunan desa secara digital dan transparan.",
        summary_en: "Village public service information web platform facilitating citizens in accessing administrative guides, announcements, and local development news digitally.",
        background: "Warga desa sering mengalami kendala jarak dan informasi saat memerlukan pengurusan berkas administrasi desa.",
        background_en: "Villagers frequently encountered geographical and information hurdles when processing administrative paperwork.",
        problem: "Penyampaian informasi fisik lambat dan tidak semua warga mendapatkan update program pemerintah desa secara merata.",
        problem_en: "Physical notice boards were slow and failed to reach all citizens equitably.",
        goal: "Membangun portal layanan publik desa yang ringan, mobile-friendly, dan mudah diakses oleh seluruh lapisan masyarakat.",
        goal_en: "Develop a lightweight, mobile-friendly public portal accessible to the entire village community.",
        workflow: [
          "Survei kebutuhan informasi dan prosedur administrasi desa",
          "Perancangan wireframe dan arsitektur informasi halaman web",
          "Implementasi struktur semantik HTML5 dan stylesheet CSS3",
          "Integrasi elemen interaktif dengan JavaScript",
          "Uji coba lintas perangkat (desktop, tablet, dan smartphone)"
        ],
        workflow_en: [
          "Needs assessment and administrative procedure mapping",
          "Wireframing and web information architecture design",
          "Semantic HTML5 structure and CSS3 styling implementation",
          "Interactive JavaScript element integration",
          "Cross-device responsiveness validation"
        ],
        features: [
          "Katalog Informasi Layanan & Syarat Dokumen Administrasi",
          "Papan Berita & Agenda Kegiatan Desa Aktual",
          "Desain Antarmuka Responsif & Cepat Diakses",
          "Formulir Pengaduan dan Aspirasi Warga"
        ],
        features_en: [
          "Public Service Catalog & Requirements Guide",
          "Village News & Event Notice Board",
          "Responsive & Fast-loading User Interface",
          "Citizen Feedback & Inquiry Form"
        ],
        challenges: "Memastikan website dapat diakses lancar pada koneksi internet seluler di pedesaan.",
        challenges_en: "Ensuring smooth site performance over variable rural mobile network conditions.",
        solution: "Mengoptimalkan aset gambar dan meminimalkan ketergantungan library eksternal berukuran besar.",
        solution_en: "Optimized image assets and minimized heavy external library overhead.",
        role: "Frontend Developer — Mengembangkan struktur halaman, antarmuka pengguna, dan integrasi repositori GitHub.",
        role_en: "Frontend Developer — Crafted page structures, user interfaces, and GitHub repository integration.",
        results: "Website aktif membantu digitalisasi penyebaran informasi kepada lebih dari 1.000 warga desa.",
        results_en: "The active website aids in digitalizing information dissemination for over 1,000 villagers.",
        insight: "Desain yang sederhana dan navigasi yang jelas sangat esensial untuk inklusi digital masyarakat umum.",
        insight_en: "Simple, clean navigation is essential for ensuring digital inclusion across community demographics.",
        gallery: [
          "assets/img/portfolio/layanan_desa.png"
        ]
      },
      links: {
        demo: "",
        github: "https://github.com/SifaMutiasyaa/WebsiteLayananDesa"
      }
    },
    {
      id: "maha-health-app",
      name: "MAHA — My Assistant Health Apps",
      name_en: "MAHA — My Assistant Health Apps",
      company: "Bangkit Academy Project",
      desc: "Aplikasi mobile pelacak kesehatan pribadi berbasis Android native dengan integrasi cloud backend untuk sinkronisasi data.",
      desc_en: "Native Android personal health tracker mobile application with cloud backend synchronization.",
      category: "Android",
      status: "Selesai",
      status_en: "Completed",
      date: "Desember 2024",
      technologies: ["Android", "Kotlin", "Retrofit", "REST API", "GCP", "Material Design"],
      thumbnail: "assets/img/portfolio/maha.png",
      detail: {
        summary: "Aplikasi Android native yang dirancang untuk memantau indikator kesehatan harian pengguna, mencatat kebiasaan hidup sehat, serta menyinkronkan data pengguna secara aman ke backend cloud.",
        summary_en: "Native Android application engineered to track daily health metrics, record wellness habits, and securely sync user health data with a cloud backend.",
        background: "Tingginya gaya hidup sedentari menuntut aplikasi mobile pendamping kesehatan yang intuitif dan praktis digunakan sehari-hari.",
        background_en: "Sedentary modern lifestyles necessitate intuitive, lightweight mobile health companions for daily wellness habits.",
        problem: "Banyak aplikasi kesehatan berukuran berat dan sulit dioperasikan oleh pengguna umum.",
        problem_en: "Many existing health apps are bloated and complicated for casual users.",
        goal: "Menciptakan aplikasi native Android dengan antarmuka mulus dan latensi sinkronisasi minimal.",
        goal_en: "Create a native Android application featuring smooth UI transitions and minimal sync latency.",
        workflow: [
          "Penyusunan use case dan arsitektur aplikasi Android (MVVM)",
          "Perancangan UI dengan standar Material 3",
          "Implementasi API client menggunakan Retrofit & OkHttp",
          "Penyimpanan lokal dengan Room Database",
          "Testing unit dan pengujian fungsional aplikasi"
        ],
        workflow_en: [
          "Android MVVM architectural planning and use case definition",
          "Material 3 UI design and implementation",
          "API client integration via Retrofit and OkHttp",
          "Local caching with Room Database",
          "Unit testing and functional UI verification"
        ],
        features: [
          "Pencatatan Metrik Kesehatan Harian & Kalori",
          "Autentikasi Pengguna & Profil Akun Aman",
          "Sinkronisasi Cloud dengan Google Cloud Platform",
          "Visualisasi Grafik Kemajuan Kesehatan Pengguna"
        ],
        features_en: [
          "Daily Health Metric & Calorie Tracking",
          "Secure User Authentication & Profile Management",
          "GCP Cloud Data Synchronization",
          "Interactive Health Progress Charting"
        ],
        challenges: "Menjaga persistensi data saat koneksi internet terputus (offline-first capability).",
        challenges_en: "Ensuring reliable offline-first data persistence during intermittent connectivity.",
        solution: "Mengimplementasikan Room Database lokal yang otomatis tersinkronisasi saat koneksi online pulih.",
        solution_en: "Implemented local Room caching with automated background synchronization upon network recovery.",
        role: "Android Developer — Merancang arsitektur aplikasi native, integrasi REST API, dan perancangan UI/UX.",
        role_en: "Android Developer — Engineered native architecture, REST API integration, and user experience.",
        results: "Berhasil menyelesaikan aplikasi dengan waktu muat di bawah 1 detik dan sinkronisasi data stabil.",
        results_en: "Delivered app with sub-second launch times and seamless cloud data synchronization.",
        insight: "Penerapan pola MVVM sangat mempermudah pemisahan logika bisnis dan stabilitas kode pada aplikasi Android.",
        insight_en: "Adopting MVVM clean architecture significantly enhances code stability and separation of concerns.",
        gallery: [
          "assets/img/portfolio/maha.png"
        ]
      },
      links: {
        demo: "",
        github: "https://github.com/Ryhnslmn13/MAHA"
      }
    },
    {
      id: "yumify-recipe-app",
      name: "Yumify — Recipe Discovery & Recommendation App",
      name_en: "Yumify — Recipe Discovery & Recommendation App",
      company: "Independent Project",
      desc: "Aplikasi mobile eksplorasi resep masakan pintar dengan rekomendasi personal dan manajemen data bahan makanan.",
      desc_en: "Smart recipe discovery mobile application featuring personalized recommendations and culinary ingredient management.",
      category: "Android",
      status: "Selesai",
      status_en: "Completed",
      date: "Desember 2024",
      technologies: ["Android", "Kotlin", "Backend API", "Room DB", "Firebase"],
      thumbnail: "assets/img/portfolio/yumify.png",
      detail: {
        summary: "Aplikasi mobile cerdas berbasis Android untuk menemukan resep makanan berdasarkan bahan masakan yang dimiliki pengguna, dilengkapi tutorial memasak langkah demi langkah.",
        summary_en: "Smart Android mobile application for discovering food recipes based on available household ingredients, featuring step-by-step cooking guides.",
        background: "Banyak orang bingung menentukan menu masakan harian dengan bahan makanan yang terbatas di rumah.",
        background_en: "Households frequently struggle with cooking ideas based on limited on-hand ingredients.",
        problem: "Pencarian resep online seringkali menyodorkan bahan-bahan langka yang sulit didapatkan di dapur sehari-hari.",
        problem_en: "Online recipes frequently demand niche ingredients unavailable in standard home kitchens.",
        goal: "Membantu pengguna memasak secara praktis dengan mencocokkan resep terbaik berdasarkan bahan yang tersedia.",
        goal_en: "Help users cook practically by matching recipes to readily available ingredients.",
        workflow: [
          "Perancangan basis data resep dan relasi bahan masakan",
          "Pengembangan API backend untuk query resep dinamis",
          "Pembangunan antarmuka Android dengan navigasi intuitif",
          "Integrasi fitur pencarian instan dan bookmark resep favorit"
        ],
        workflow_en: [
          "Recipe schema and ingredient relational database design",
          "Backend API development for dynamic querying",
          "Android UI development with fluid navigation",
          "Instant search and favorite recipe bookmarking integration"
        ],
        features: [
          "Pencarian Resep Berdasarkan Bahan di Dapur",
          "Panduan Memasak Langkah-demi-Langkah Interaktif",
          "Penyimpanan Menu Favorit Offline",
          "Kalkulator Porsi dan Estimasi Waktu Memasak"
        ],
        features_en: [
          "Ingredient-based Recipe Matching Engine",
          "Interactive Step-by-Step Cooking Walkthrough",
          "Offline Bookmark & Favorites Storage",
          "Portion Calculator & Cooking Time Estimator"
        ],
        challenges: "Optimasi algoritma pencocokan resep agar tetap cepat saat katalog resep bertambah banyak.",
        challenges_en: "Optimizing ingredient-matching query performance as the recipe catalog expands.",
        solution: "Mengindeks bahan makanan dan menyederhanakan filter query pada database backend.",
        solution_en: "Indexed ingredient tokens and optimized database query execution plans.",
        role: "Fullstack / Android Developer — Mengembangkan backend data resep dan antarmuka aplikasi Android.",
        role_en: "Fullstack / Android Developer — Engineered backend recipe services and the native Android user interface.",
        results: "Aplikasi berhasil dipublikasikan dan diuji coba dengan respons performa yang responsif.",
        results_en: "Application successfully packaged and tested with snappy query response times.",
        insight: "Pengalaman pengguna yang menyenangkan terletak pada kecepatan menemukan jawaban praktis atas masalah sehari-hari.",
        insight_en: "Great UX stems from delivering swift, practical answers to everyday domestic pain points.",
        gallery: [
          "assets/img/portfolio/yumify.png"
        ]
      },
      links: {
        demo: "",
        github: "https://github.com/Nzwaaa/Yumify"
      }
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
