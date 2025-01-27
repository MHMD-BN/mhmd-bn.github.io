// Function to get motivation message based on completion percentage
function getMotivationMessage(percentage) {
  if (percentage >= 100) return "مبروك! 🎉 لقد أتممت حفظ جميع الصفحات! إنجاز رائع!";
  if (percentage >= 75) return "رائع جداً! 🌟 أنت قريب جداً من إتمام هدفك!";
  if (percentage >= 50) return "أحسنت! ⭐ لقد وصلت إلى منتصف الطريق!";
  if (percentage >= 25) return "استمر! 💪 ربع الطريق خلفك!";
  if (percentage >= 10) return "بداية موفقة! 🌱 واصل التقدم!";
  return "ابدأ رحلتك مع الحفظ! 📚";
}

// Function to generate the memorization plan
function generateMemorizationPlan(totalPages, pagesPerDay, closeReviewCount, reviewCycleDays, startPage = 1) {
  // Input validation
  if (totalPages < 1 || pagesPerDay < 1 || closeReviewCount < 0 || reviewCycleDays < 1 || startPage < 1) {
    throw new Error('Invalid input parameters');
  }
  if (startPage > totalPages) {
    throw new Error('Start page cannot be greater than total pages');
  }

  let plan = [];
  let currentPage = startPage;
  let reviewWindow = [];
  let memorizedPages = [];
  let distantReviewStartIndex = 0;
  
  // Calculate the total days required for memorization
  let totalDays = Math.ceil((totalPages - currentPage + 1) / pagesPerDay);

  for (let day = 1; day <= totalDays; day++) {
    // Calculate new pages to memorize
    let endPage = Math.min(currentPage + pagesPerDay - 1, totalPages);
    let newMemorization = [currentPage,endPage];
    
    // Add new pages to memorized pages array
    for (let i = currentPage; i <= endPage; i++) {
      memorizedPages.push(i);
    }
    currentPage = endPage + 1;

    let closeReview = [newMemorization[0]-3 , newMemorization[0]-1];

    // Distant review logic
    let distantReview = [];
    if (day > reviewCycleDays) {
      let availablePagesForReview = memorizedPages.slice(0, -closeReviewCount);
      
      if (availablePagesForReview.length > 0) {
        let endIndex = Math.min(distantReviewStartIndex + 10, availablePagesForReview.length);
        distantReview = availablePagesForReview.slice(distantReviewStartIndex, endIndex);
        
        distantReviewStartIndex += 10;
        
        if (distantReviewStartIndex >= availablePagesForReview.length) {
          distantReviewStartIndex = 0;
        }
      }
    } else {
      distantReview = memorizedPages.filter((page, index) => 
        (day - 1) % reviewCycleDays === index % reviewCycleDays
      );
    }
    
    // Modified to show only first and last page of distant review
    let distantReviewText = [distantReview[0] , distantReview[distantReview.length-1]];

    // Create day plan object with additional statistics
    let percentageComplete = ((memorizedPages.length / totalPages) * 100).toFixed(1);
    let motivationMessage = getMotivationMessage(parseFloat(percentageComplete));
    
    plan.push({
      day: day,
      date: new Date(Date.now() + (day - 1) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      newMemorization: newMemorization,
      closeReview: closeReview,
      distantReview: distantReviewText,
      totalMemorized: memorizedPages.length,
      percentageComplete: percentageComplete + '%',
      motivation: motivationMessage
    });

    // Update review window
    reviewWindow.push(newMemorization);
  }

  return plan;
}

// Function to display the memorization plan
function displayPlan(plan , Day) {
  return plan[Day];
}
/*
  const totalPages = 604;
  const pagesPerDay = 2;
  const closeReviewCount = 3;
  const reviewCycleDays = 30;
  const startPage = 1;

  const memorizationPlan = generateMemorizationPlan(
    totalPages, 
    pagesPerDay, 
    closeReviewCount, 
    reviewCycleDays, 
    startPage);

*/
