const surahsAR = [
  { name: "الفاتحة",    pages: 1,  juz: 1 },
  { name: "البقرة",     pages: 48, juz: 1 },
  { name: "آل عمران",   pages: 27, juz: 3 },
  { name: "النساء",     pages: 23, juz: 4 },
  { name: "المائدة",    pages: 22, juz: 6 },
  { name: "الأنعام",    pages: 23, juz: 7 },
  { name: "الأعراف",    pages: 26, juz: 8 },
  { name: "الأنفال",    pages: 11, juz: 9 },
  { name: "التوبة",     pages: 16, juz: 10 },
  { name: "يونس",       pages: 11, juz: 11 },
  { name: "هود",        pages: 10, juz: 11 },
  { name: "يوسف",       pages: 12, juz: 12 },
  { name: "الرعد",      pages: 6,  juz: 13 },
  { name: "إبراهيم",    pages: 7,  juz: 13 },
  { name: "الحجر",      pages: 6,  juz: 14 },
  { name: "النحل",      pages: 16, juz: 14 },
  { name: "الإسراء",    pages: 12, juz: 15 },
  { name: "الكهف",      pages: 12, juz: 15 },
  { name: "مريم",       pages: 7,  juz: 16 },
  { name: "طه",         pages: 9,  juz: 16 },
  { name: "الأنبياء",   pages: 7,  juz: 17 },
  { name: "الحج",       pages: 10, juz: 17 },
  { name: "المؤمنون",   pages: 6,  juz: 18 },
  { name: "النور",      pages: 9,  juz: 18 },
  { name: "الفرقان",    pages: 8,  juz: 19 },
  { name: "الشعراء",    pages: 10, juz: 19 },
  { name: "النمل",      pages: 7,  juz: 20 },
  { name: "القصص",      pages: 13, juz: 20 },
  { name: "العنكبوت",   pages: 7,  juz: 21 },
  { name: "الروم",      pages: 6,  juz: 21 },
  { name: "لقمان",      pages: 4,  juz: 22 },
  { name: "السجدة",      pages: 3,  juz: 22 },
  { name: "الأحزاب",    pages: 12, juz: 23 },
  { name: "سبأ",        pages: 6,  juz: 23 },
  { name: "فاطر",       pages: 5,  juz: 24 },
  { name: "يس",         pages: 10, juz: 24 },
  { name: "الصافات",    pages: 10, juz: 25 },
  { name: "ص",          pages: 10, juz: 25 },
  { name: "الزمر",      pages: 10, juz: 26 },
  { name: "غافر",      pages: 15, juz: 26 },
  { name: "فصلت",      pages: 14, juz: 27 },
  { name: "الشورى",     pages: 13, juz: 27 },
  { name: "الزخرف",     pages: 9,  juz: 28 },
  { name: "الدخان",     pages: 8,  juz: 28 },
  { name: "الجاثية",    pages: 4,  juz: 29 },
  { name: "الأحقاف",     pages: 7,  juz: 29 },
  { name: "محمد",      pages: 3,  juz: 30 },
  { name: "الفتح",      pages: 3,  juz: 30 },
  { name: "الحجرات",    pages: 2,  juz: 30 },
  { name: "ق",          pages: 3,  juz: 30 },
  { name: "الذاريات",   pages: 3,  juz: 30 },
  { name: "الطور",      pages: 2,  juz: 30 },
  { name: "النجم",      pages: 3,  juz: 30 },
  { name: "القمر",      pages: 3,  juz: 30 },
  { name: "الرحمن",     pages: 2,  juz: 30 },
  { name: "الواقعة",    pages: 4,  juz: 30 },
  { name: "الحديد",      pages: 3,  juz: 30 },
  { name: "المجادلة",   pages: 3,  juz: 30 },
  { name: "الحشر",      pages: 3,  juz: 30 },
  { name: "الممتحنة",   pages: 2,  juz: 30 },
  { name: "الصف",        pages: 2,  juz: 30 },
  { name: "الجمعة",      pages: 2,  juz: 30 },
  { name: "المنافقون",  pages: 2,  juz: 30 },
  { name: "التغابن",    pages: 2,  juz: 30 },
  { name: "الطلاق",     pages: 2,  juz: 30 },
  { name: "التحريم",   pages: 2,  juz: 30 },
  { name: "الملك",      pages: 2,  juz: 30 },
  { name: "القلم",      pages: 2,  juz: 30 },
  { name: "الحاقة",     pages: 2,  juz: 30 },
  { name: "المعارج",    pages: 2,  juz: 30 },
  { name: "نوح",        pages: 2,  juz: 30 },
  { name: "الجن",       pages: 2,  juz: 30 },
  { name: "المزمل",     pages: 1,  juz: 30 },
  { name: "المدثر",     pages: 1,  juz: 30 },
  { name: "القيامة",    pages: 1,  juz: 30 },
  { name: "الإنسان",    pages: 1,  juz: 30 },
  { name: "المرسلات",   pages: 1,  juz: 30 },
  { name: "النبأ",      pages: 1,  juz: 30 },
  { name: "النازعات",   pages: 1,  juz: 30 },
  { name: "عبس",        pages: 1,  juz: 30 },
  { name: "التكوير",    pages: 1,  juz: 30 },
  { name: "الإنفطار",   pages: 1,  juz: 30 },
  { name: "المطففين",   pages: 1,  juz: 30 },
  { name: "الإنشقاق",   pages: 1,  juz: 30 },
  { name: "البروج",     pages: 1,  juz: 30 },
  { name: "الطارق",     pages: 1,  juz: 30 },
  { name: "الأعلى",     pages: 1,  juz: 30 },
  { name: "الغاشية",    pages: 1,  juz: 30 },
  { name: "الفجر",      pages: 1,  juz: 30 },
  { name: "البلد",      pages: 1,  juz: 30 },
  { name: "الشمس",      pages: 1,  juz: 30 },
  { name: "الليل",      pages: 1,  juz: 30 },
  { name: "الضحى",      pages: 1,  juz: 30 },
  { name: "الشرح",      pages: 1,  juz: 30 },
  { name: "التين",      pages: 1,  juz: 30 },
  { name: "العلق",      pages: 1,  juz: 30 },
  { name: "القدر",      pages: 1,  juz: 30 },
  { name: "البينة",     pages: 1,  juz: 30 },
  { name: "الزلزلة",    pages: 1,  juz: 30 },
  { name: "العاديات",    pages: 1,  juz: 30 },
  { name: "القارعة",    pages: 1,  juz: 30 },
  { name: "التكاثر",    pages: 1,  juz: 30 },
  { name: "العصر",      pages: 1,  juz: 30 },
  { name: "الهمزة",     pages: 1,  juz: 30 },
  { name: "الفيل",      pages: 1,  juz: 30 },
  { name: "قريش",       pages: 1,  juz: 30 },
  { name: "الماعون",    pages: 1,  juz: 30 },
  { name: "الكوثر",     pages: 1,  juz: 30 },
  { name: "الكافرون",   pages: 1,  juz: 30 },
  { name: "النصر",      pages: 1,  juz: 30 },
  { name: "المسد",      pages: 1,  juz: 30 },
  { name: "الإخلاص",    pages: 1,  juz: 30 },
  { name: "الفلق",      pages: 1,  juz: 30 },
  { name: "الناس",      pages: 1,  juz: 30 }
];
const juz = 20;
const hisb = 10;

function thReviewPapers(time) {
  let pagesToReview = 0;

  if (time < 30) {
    pagesToReview = 5;
  } else if (time >= 30 && time <= 59) {
    pagesToReview = 10;
  } else if (time >= 60 && time <= 89) {
    pagesToReview = 15;
  } else if (time >= 90) {
    pagesToReview = 20;
  }

  return pagesToReview;
}
let pars = [{pages:48, name: "البقرة"} , {pages: 1 , name:"الفاتحة"} , {pages:10, name:"حزب 1"} , {pages:20, name:"الجزء 1"}];
function paerts(parts, time, day) {
  let dailypaper = thReviewPapers(time);
  let totalPagesRead = 0;
  let partIndex = 0;
  let pageOffset = 0;
  let dailyTasks = [];

  for (let d = 1; d <= day; d++) {
    totalPagesRead = 0;
    dailyTasks = []; // Reset dailyTasks for each day, effectively keeping only the last day's tasks
    while (totalPagesRead < dailypaper - 4) {
      if (partIndex >= parts.length) {
        partIndex = 0;
        pageOffset = 0;
      }

      let part = parts[partIndex];
      let partPages = part.pages;
      let surahInfo = surahsAR.find(surah => surah.name === part.name);
      if (surahInfo) partPages = surahInfo.pages;

      let remainingPagesInPart = partPages - pageOffset;
      
      if (remainingPagesInPart <= dailypaper + 4) {
        if (remainingPagesInPart > 0) {
          let startPage = pageOffset + 1;
          let endPage = partPages;
          dailyTasks.push(`اليوم ${d}: قراءة من صفحة ${startPage} إلى ${endPage} من ${part.name}`);
        }
        totalPagesRead += remainingPagesInPart;
        pageOffset = 0;
        partIndex++;
      } else {
        let pagesToReadToday = Math.min(dailypaper, remainingPagesInPart);
        if (pagesToReadToday > 0) {
          let startPage = pageOffset + 1;
          let endPage = pageOffset + pagesToReadToday;
          dailyTasks.push(`اليوم ${d}: قراءة من صفحة ${startPage} إلى ${endPage} من ${part.name}`);
        }
        totalPagesRead += pagesToReadToday;
        pageOffset += pagesToReadToday;
      }

      if (pageOffset >= partPages) {
        partIndex++;
        pageOffset = 0;
      }
    }
  }

  return dailyTasks;
}


