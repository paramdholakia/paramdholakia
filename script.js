// Disable selection of text
document.body.onselectstart = function () {
  return false;
};

// Disable right click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

const passions = [
  "Programmer",
  "Data Scientist",
  "Game Developer",
  "Stargazer",
  "Gamer",
  "Learner",
  "Explorer",
  "Dreamer",
  "Innovator",
  "Mentor",
  "Teacher",
];
const passionsElement = document.getElementById("passions");

let passionIndex = 0;
let charIndex = 0;
let lastPassionIndex = -1;

function getRandomPassionIndex() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * passions.length);
  } while (newIndex === lastPassionIndex);
  lastPassionIndex = newIndex;
  return newIndex;
}

function typePassion() {
  if (charIndex < passions[passionIndex].length) {
    passionsElement.innerHTML += passions[passionIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typePassion, 100); // Adjust speed here
  } else {
    setTimeout(erasePassion, 1000); // Pause before erasing
  }
}

function erasePassion() {
  if (charIndex > 0) {
    passionsElement.innerHTML = passions[passionIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erasePassion, 50); // Adjust erase speed here
  } else {
    passionIndex = getRandomPassionIndex(); // Move to random passion
    setTimeout(typePassion, 500); // Pause before typing next passion
  }
}

document.addEventListener("DOMContentLoaded", typePassion); // Start the effect

quotes = [
  "Don't be sorry, be better. - Kratos",
  "A boat is safe in the harbor. But this is not the purpose of a boat. - Paulo Coelho",
  "Life is a journey, not a destination. - Ralph Waldo Emerson",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Be formless, shapeless, like water. - Bruce Lee",
  "Life is a game, play it. - Mother Teresa",
  "Life is a daring adventure or nothing at all. - Helen Keller",
  "Revenge is a luxury we can't afford. - Arthur Morgan",
  "We are the product of our choices, not of our abilities. - Albus Dumbledore",
  "A person who never made a mistake never tried anything new. - Albert Einstein",
  "The right man in the wrong place can make all the difference in the world. - G-man",
  "Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair. - John Marston",
  "A sword wields no strength unless the hands that holds it has courage. - The Hero's Shade",
  "Hope is what makes us strong. It is why we are here. It is what we fight with when all else is lost. - Pandora",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Do, or do not. There is no try. - Yoda",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Hard times create strong men, strong men create good times, good times create weak men, and weak men create hard times. - G. Michael Hopf",
  "Fall seven times and stand up eight. - Japanese Proverb",
  "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.' - Mary Anne Radmacher",
  "What we do in life echoes in eternity. - Maximus, *Gladiator*",
  "Victory is reserved for those who are willing to pay its price. - Sun Tzu",
  "It is not the mountain we conquer, but ourselves. - Sir Edmund Hillary",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Pain is temporary. Quitting lasts forever. - Lance Armstrong",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "A smooth sea never made a skilled sailor. - Franklin D. Roosevelt",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Only those who dare to fail greatly can ever achieve greatly. - Robert F. Kennedy",
  "Dream big and dare to fail. - Norman Vaughan",
  "A journey of a thousand miles begins with a single step. - Lao Tzu",
  "The best way to predict the future is to create it. - Peter Drucker",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Action is the foundational key to all success. - Pablo Picasso",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "It always seems impossible until it is done. - Nelson Mandela",
  "Great things never came from comfort zones. - Anonymous",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The secret of getting ahead is getting started. - Mark Twain",
  "The harder you work for something, the greater you'll feel when you achieve it. - Anonymous",
  "If you're going through hell, keep going. - Winston Churchill",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "Whether you think you can or you think you can't, you're right. - Henry Ford",
  "Perseverance is not a long race; it is many short races one after the other. - Walter Elliot",
  "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
  "Failure is the condiment that gives success its flavor. - Truman Capote",
  "Success is how high you bounce when you hit bottom. - George S. Patton",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Never give up, for that is just the place and time that the tide will turn. - Harriet Beecher Stowe",
  "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
  "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson",
  "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
  "Opportunities multiply as they are seized. - Sun Tzu",
  "Success is getting what you want. Happiness is wanting what you get. - Dale Carnegie",
  "When something is important enough, you do it even if the odds are not in your favor. - Elon Musk",
  "Your limitation—it's only your imagination. - Anonymous",
  "Push yourself, because no one else is going to do it for you. - Anonymous",
  "Great things never come from comfort zones. - Anonymous",
  "Success doesn't just find you. You have to go out and get it. - Anonymous",
  "Don't stop when you're tired. Stop when you're done. - Anonymous",
  "Wake up with determination. Go to bed with satisfaction. - Anonymous",
  "Do something today that your future self will thank you for. - Anonymous",
  "It's going to be hard, but hard does not mean impossible. - Anonymous",
  "Dream it. Wish it. Do it. - Anonymous",
  "Stay positive, work hard, make it happen. - Anonymous",
  "Good things come to people who wait, but better things come to those who go out and get them. - Anonymous",
  "Success is not overnight. It's when every day you get a little better than the day before. It all adds up. - Dwayne Johnson",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Don’t count the days, make the days count. - Muhammad Ali",
  "The best revenge is massive success. - Frank Sinatra",
  "Hesitation is defeat. - Genichiro Ashina",
];

function displayRandomQuote() {
  const quotesElement = document.querySelector(".quote-of-the-day");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quotesElement.innerHTML = quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", displayRandomQuote);



document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting && !entry.target.classList.contains('active')) {
                entry.target.classList.add('active');
            }
        });
    }, { 
        threshold: 0.4,
        rootMargin: '-50px 0px' 
    });

    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0'; // Initial hidden state
        observer.observe(item);
    });
});



// PROJECTS

document.addEventListener('DOMContentLoaded', function() {
  // Mobile touch handling
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  const projectCards = document.querySelectorAll('.project-card');
  
  if (isTouchDevice) {
      document.addEventListener('click', function(e) {
          // Close all descriptions when clicking outside
          if (!e.target.closest('.project-card')) {
              projectCards.forEach(card => card.classList.remove('active'));
          }
      });

      projectCards.forEach(card => {
          card.addEventListener('click', function(e) {
              e.stopPropagation();
              // Toggle active class for clicked card
              if (card.classList.contains('active')) {
                  card.classList.remove('active');
              } else {
                  // Close other cards
                  projectCards.forEach(c => c !== card ? c.classList.remove('active') : null);
                  card.classList.add('active');
              }
          });
      });
  }
});



// Fetch GitHub Stats (Fixed star count and error handling)
async function fetchGitHubStats() {
  try {
      // Fetch user data
      const userResponse = await fetch('https://api.github.com/users/paramdholakia');
      if (!userResponse.ok) throw new Error(`GitHub API failed: ${userResponse.status}`);
      const userData = await userResponse.json();

      // Fetch all repositories to calculate stars
      let totalStars = 0;
      let page = 1;
      while (true) {
          const reposResponse = await fetch(`${userData.repos_url}?per_page=100&page=${page}`);
          if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
          const reposPage = await reposResponse.json();
          if (reposPage.length === 0) break;
          totalStars += reposPage.reduce((acc, repo) => acc + repo.stargazers_count, 0);
          page++;
      }

      // Get all stat cards
      const stats = document.querySelectorAll('.github-card .stat-value');
      
      // Update values with real data
      stats[0].textContent = userData.public_repos;  // Repositories
      stats[1].textContent = totalStars;             // Actual stars from all repos
      stats[2].textContent = userData.public_gists;  // Using gists as placeholder

      // Remove loading state
      document.querySelectorAll('.github-card .stat-card').forEach(card => {
          card.classList.remove('loading');
      });

  } catch (error) {
      console.error('GitHub API Error:', error);
      document.querySelector('.github-card').insertAdjacentHTML('beforeend',
          '<p class="error">Failed to load GitHub stats: ' + error.message + '</p>');
  }
}

// Fetch LeetCode Stats (Fixed status check and error handling)
async function fetchLeetCodeStats() {
  try {
      const response = await fetch('https://leetcode-stats-api.herokuapp.com/ParamDholakia_404');
      if (response.status !== 200) throw new Error(`LeetCode API failed: ${response.status}`);
      const data = await response.json();

      // Validate response structure
      if (!data.totalSolved && data.totalSolved !== 0) throw new Error('Invalid LeetCode response');

      const stats = document.querySelectorAll('.leetcode-card .stat-value');
      
      // Update values with proper formatting
      stats[0].textContent = data.totalSolved;
      stats[1].textContent = `#${data.ranking}`;
      stats[2].textContent = `${data.acceptanceRate.toFixed(1)}%`;  // Format to 1 decimal

      // Remove loading state
      document.querySelectorAll('.leetcode-card .stat-card').forEach(card => {
          card.classList.remove('loading');
      });

  } catch (error) {
      console.error('LeetCode API Error:', error);
      document.querySelector('.leetcode-card').insertAdjacentHTML('beforeend',
          '<p class="error">Failed to load LeetCode stats: ' + error.message + '</p>');
  }
}

// Initialize with error handling
window.addEventListener('DOMContentLoaded', () => {
  Promise.allSettled([fetchGitHubStats(), fetchLeetCodeStats()])
    .then(results => {
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          console.error(`Fetch ${index ? 'LeetCode' : 'GitHub'} failed:`, result.reason);
        }
      });
    });
});