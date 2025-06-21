// Club Lit Application JavaScript

// Application Data (from provided JSON)
const applicationData = {
  "books": [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": ["Fiction", "Classic"],
      "description": "A gripping tale of racial injustice and childhood innocence in the American South.",
      "cover": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      "rating": 4.8,
      "reviews": 1247,
      "published": "1960",
      "pages": 376,
      "tags": ["Classic", "American Literature", "Social Justice"]
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "genre": ["Dystopian", "Science Fiction"],
      "description": "A dystopian social science fiction novel about totalitarian control and surveillance.",
      "cover": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop",
      "rating": 4.7,
      "reviews": 2156,
      "published": "1949",
      "pages": 328,
      "tags": ["Dystopian", "Political Fiction", "Classic"]
    },
    {
      "id": 3,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": ["Romance", "Classic"],
      "description": "A romantic novel about manners, upbringing, morality, and marriage in 19th-century England.",
      "cover": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      "rating": 4.6,
      "reviews": 1834,
      "published": "1813",
      "pages": 432,
      "tags": ["Romance", "British Literature", "Social Commentary"]
    },
    {
      "id": 4,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": ["Fiction", "Classic"],
      "description": "A critique of the American Dream set in the Jazz Age of the 1920s.",
      "cover": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      "rating": 4.5,
      "reviews": 1923,
      "published": "1925",
      "pages": 180,
      "tags": ["American Dream", "Jazz Age", "Tragedy"]
    },
    {
      "id": 5,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "genre": ["Fiction", "Coming of Age"],
      "description": "A controversial novel about teenage rebellion and alienation in post-war America.",
      "cover": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      "rating": 4.3,
      "reviews": 1567,
      "published": "1951",
      "pages": 277,
      "tags": ["Coming of Age", "Rebellion", "Psychology"]
    },
    {
      "id": 6,
      "title": "Dune",
      "author": "Frank Herbert",
      "genre": ["Science Fiction", "Epic"],
      "description": "An epic science fiction novel set in a distant future amid a feudal interstellar society.",
      "cover": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=400&fit=crop",
      "rating": 4.9,
      "reviews": 2847,
      "published": "1965",
      "pages": 688,
      "tags": ["Space Opera", "Politics", "Ecology"]
    }
  ],
  "bookClubs": [
    {
      "id": 1,
      "name": "Classic Literature Circle",
      "description": "Exploring timeless works of literature that have shaped human thought and culture.",
      "currentBook": "To Kill a Mockingbird",
      "members": 156,
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      "category": "Classic Literature",
      "nextMeeting": "2025-06-25"
    },
    {
      "id": 2,
      "name": "Sci-Fi Enthusiasts",
      "description": "Diving deep into science fiction worlds and exploring future possibilities.",
      "currentBook": "Dune",
      "members": 203,
      "image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=300&fit=crop",
      "category": "Science Fiction",
      "nextMeeting": "2025-06-28"
    },
    {
      "id": 3,
      "name": "Modern Fiction Readers",
      "description": "Contemporary novels that reflect modern society and human experiences.",
      "currentBook": "The Great Gatsby",
      "members": 127,
      "image": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      "category": "Modern Fiction",
      "nextMeeting": "2025-06-30"
    }
  ],
  "users": [
    {
      "id": 1,
      "name": "Alex Reader",
      "email": "alex@example.com",
      "role": "user",
      "booksRead": 23,
      "clubsJoined": 2,
      "currentReading": "To Kill a Mockingbird",
      "readingProgress": 68,
      "preferences": ["Classic Literature", "Science Fiction"],
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      "id": 2,
      "name": "Admin User",
      "email": "admin@clublit.com",
      "role": "admin",
      "booksRead": 156,
      "clubsJoined": 5,
      "currentReading": "Platform Analytics",
      "readingProgress": 100,
      "preferences": ["All Genres"],
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    }
  ],
  "analytics": {
    "totalUsers": 1247,
    "activeUsers": 892,
    "totalBooks": 2843,
    "totalClubs": 156,
    "dailyReading": [
      {"date": "2025-06-15", "hours": 1847},
      {"date": "2025-06-16", "hours": 1923},
      {"date": "2025-06-17", "hours": 2156},
      {"date": "2025-06-18", "hours": 2034},
      {"date": "2025-06-19", "hours": 2287},
      {"date": "2025-06-20", "hours": 2456},
      {"date": "2025-06-21", "hours": 2178}
    ],
    "popularGenres": [
      {"genre": "Fiction", "percentage": 32},
      {"genre": "Science Fiction", "percentage": 18},
      {"genre": "Romance", "percentage": 15},
      {"genre": "Mystery", "percentage": 12},
      {"genre": "Biography", "percentage": 10},
      {"genre": "Other", "percentage": 13}
    ]
  },
  "discussions": [
    {
      "id": 1,
      "clubId": 1,
      "title": "Character Development in Chapter 5",
      "author": "Sarah M.",
      "replies": 12,
      "lastActivity": "2 hours ago",
      "preview": "I found Scout's perspective on the trial particularly compelling..."
    },
    {
      "id": 2,
      "clubId": 1,
      "title": "Historical Context Discussion",
      "author": "Mike L.",
      "replies": 8,
      "lastActivity": "5 hours ago",
      "preview": "The novel's setting in 1930s Alabama provides crucial context..."
    }
  ],
  "chatHistory": [
    {"sender": "Alex Reader", "message": "What did everyone think about Chapter 3?", "time": "10:30 AM"},
    {"sender": "Sarah M.", "message": "I loved the character development!", "time": "10:32 AM"},
    {"sender": "Mike L.", "message": "The symbolism was particularly striking.", "time": "10:35 AM"}
  ]
};

// Application State
let currentUser = null;
let currentBook = null;
let currentClub = null;
let currentPage = 1;
let totalPages = 400;
let readingProgress = 0;
let filteredBooks = applicationData.books;
let filteredClubs = applicationData.bookClubs;

// DOM Elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const userProfile = document.querySelector('.user-profile');
const authButtons = document.querySelector('.navbar__auth');

// Application Initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadFeaturedContent();
    setupCharts();
    
    // Check if there's a logged-in user
    const savedUser = localStorage.getItem('clublit-user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthUI();
        loadUserDashboard();
    }
});

// Initialize Application
function initializeApp() {
    // Show home page by default
    showPage('home');
    
    // Initialize all dynamic content
    loadBooks();
    loadBookClubs();
    setupChatbot();
}

// Event Listeners Setup
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });

    // Authentication Forms
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }

    // Logout
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('logout-btn')) {
            e.preventDefault();
            handleLogout();
        }
    });

    // Book Search and Filters
    const bookSearch = document.getElementById('book-search');
    const genreFilter = document.getElementById('genre-filter');
    const sortBooks = document.getElementById('sort-books');

    if (bookSearch) {
        bookSearch.addEventListener('input', filterBooks);
    }
    if (genreFilter) {
        genreFilter.addEventListener('change', filterBooks);
    }
    if (sortBooks) {
        sortBooks.addEventListener('change', sortBooks);
    }

    // Book Cards
    document.addEventListener('click', function(e) {
        if (e.target.closest('.book-card')) {
            const bookId = parseInt(e.target.closest('.book-card').dataset.bookId);
            showBookDetail(bookId);
        }
    });

    // Club Cards
    document.addEventListener('click', function(e) {
        if (e.target.closest('.club-card')) {
            const clubId = parseInt(e.target.closest('.club-card').dataset.clubId);
            showClubDetail(clubId);
        }
    });

    // Reader Controls
    setupReaderControls();
    
    // Tab Navigation
    setupTabNavigation();
    
    // Chatbot
    setupChatbotInteraction();
    
    // Admin Dashboard
    setupAdminDashboard();
    
    // Carousel Controls
    setupCarouselControls();
}

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Load page-specific content
        switch(pageId) {
            case 'dashboard':
                if (currentUser) {
                    loadUserDashboard();
                } else {
                    showPage('login');
                }
                break;
            case 'discover':
                loadBooks();
                break;
            case 'clubs':
                loadBookClubs();
                break;
            case 'admin-dashboard':
                if (currentUser && currentUser.role === 'admin') {
                    loadAdminDashboard();
                } else {
                    showPage('login');
                }
                break;
            case 'profile':
                if (currentUser) {
                    loadUserProfile();
                } else {
                    showPage('login');
                }
                break;
        }
    }
}

// Authentication Functions
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simulate login - in real app, this would be an API call
    const user = applicationData.users.find(u => u.email === email);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('clublit-user', JSON.stringify(user));
        updateAuthUI();
        showPage('dashboard');
        
        // Show success message
        showNotification('Welcome back, ' + user.name + '!', 'success');
    } else {
        showNotification('Invalid credentials. Try alex@example.com or admin@clublit.com', 'error');
    }
}

function handleSignup(e) {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    // Get selected preferences
    const preferences = [];
    document.querySelectorAll('#signup-form input[type="checkbox"]:checked').forEach(cb => {
        preferences.push(cb.value);
    });
    
    // Create new user
    const newUser = {
        id: applicationData.users.length + 1,
        name: name,
        email: email,
        role: 'user',
        booksRead: 0,
        clubsJoined: 0,
        currentReading: null,
        readingProgress: 0,
        preferences: preferences,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    };
    
    applicationData.users.push(newUser);
    currentUser = newUser;
    localStorage.setItem('clublit-user', JSON.stringify(newUser));
    
    updateAuthUI();
    showPage('dashboard');
    showNotification('Account created successfully! Welcome to Club Lit!', 'success');
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('clublit-user');
    updateAuthUI();
    showPage('home');
    showNotification('You have been logged out.', 'info');
}

function updateAuthUI() {
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const userProfile = document.querySelector('.user-profile');
    
    if (currentUser) {
        // Hide auth buttons
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        
        // Show user profile
        userProfile.classList.remove('hidden');
        userProfile.querySelector('.user-avatar').src = currentUser.avatar;
        userProfile.querySelector('.user-name').textContent = currentUser.name;
        
        // Update navigation for admin
        if (currentUser.role === 'admin') {
            const adminLink = document.createElement('li');
            adminLink.innerHTML = '<a href="#" data-page="admin-dashboard" class="nav-link">Admin</a>';
            document.querySelector('.navbar__menu ul').appendChild(adminLink);
        }
    } else {
        // Show auth buttons
        loginBtn.style.display = 'inline-flex';
        signupBtn.style.display = 'inline-flex';
        
        // Hide user profile
        userProfile.classList.add('hidden');
    }
}

// Content Loading Functions
function loadFeaturedContent() {
    loadFeaturedBooks();
    loadFeaturedClubs();
}

function loadFeaturedBooks() {
    const featuredBooksGrid = document.getElementById('featured-books-grid');
    if (!featuredBooksGrid) return;
    
    const featuredBooks = applicationData.books.slice(0, 3);
    featuredBooksGrid.innerHTML = featuredBooks.map(book => createBookCard(book)).join('');
}

function loadFeaturedClubs() {
    const featuredClubsGrid = document.getElementById('featured-clubs-grid');
    if (!featuredClubsGrid) return;
    
    featuredClubsGrid.innerHTML = applicationData.bookClubs.map(club => createClubCard(club)).join('');
}

function loadBooks() {
    const booksGrid = document.getElementById('books-grid');
    if (!booksGrid) return;
    
    booksGrid.innerHTML = filteredBooks.map(book => createBookCard(book)).join('');
}

function loadBookClubs() {
    const clubsGrid = document.getElementById('clubs-grid');
    if (!clubsGrid) return;
    
    clubsGrid.innerHTML = filteredClubs.map(club => createClubCard(club)).join('');
}

function createBookCard(book) {
    return `
        <div class="book-card" data-book-id="${book.id}">
            <div class="book-card__image">
                <img src="${book.cover}" alt="${book.title}">
            </div>
            <div class="book-card__content">
                <h3 class="book-card__title">${book.title}</h3>
                <p class="book-card__author">by ${book.author}</p>
                <div class="book-card__rating">
                    <span class="book-card__rating-value">★ ${book.rating}</span>
                    <span class="book-card__rating-count">(${book.reviews} reviews)</span>
                </div>
                <p class="book-card__genre">${book.genre.join(', ')}</p>
                <div class="book-card__actions">
                    <button class="btn btn--primary btn--sm" onclick="showBookDetail(${book.id})">View Details</button>
                </div>
            </div>
        </div>
    `;
}

function createClubCard(club) {
    return `
        <div class="club-card" data-club-id="${club.id}">
            <div class="club-card__image">
                <img src="${club.image}" alt="${club.name}">
            </div>
            <div class="club-card__content">
                <h3 class="club-card__title">${club.name}</h3>
                <div class="club-card__meta">
                    <span>${club.members} members</span>
                    <span>${club.category}</span>
                </div>
                <p class="club-card__description">${club.description}</p>
                <div class="club-card__current">
                    <strong>Currently Reading:</strong> ${club.currentBook}
                </div>
                <div class="club-card__meeting">
                    <strong>Next Meeting:</strong> ${formatDate(club.nextMeeting)}
                </div>
                <div class="club-card__actions">
                    <button class="btn btn--primary btn--sm" onclick="showClubDetail(${club.id})">Join Discussion</button>
                </div>
            </div>
        </div>
    `;
}

// Book Detail Functions
function showBookDetail(bookId) {
    const book = applicationData.books.find(b => b.id === bookId);
    if (!book) return;
    
    currentBook = book;
    
    // Update book detail page
    document.getElementById('detail-book-cover').src = book.cover;
    document.getElementById('detail-book-title').textContent = book.title;
    document.getElementById('detail-book-author').textContent = book.author;
    document.getElementById('detail-book-rating').textContent = `★ ${book.rating}`;
    document.getElementById('detail-book-reviews').textContent = `${book.reviews} reviews`;
    document.getElementById('detail-book-published').textContent = `Published: ${book.published}`;
    document.getElementById('detail-book-pages').textContent = `${book.pages} pages`;
    document.getElementById('detail-book-description').textContent = book.description;
    
    // Update tags
    const tagsContainer = document.getElementById('detail-book-tags');
    tagsContainer.innerHTML = book.tags.map(tag => 
        `<span class="book-tag">${tag}</span>`
    ).join('');
    
    // Setup start reading button
    const startReadingBtn = document.getElementById('start-reading');
    startReadingBtn.addEventListener('click', () => startReading(book));
    
    // Load sample reviews
    loadBookReviews(book);
    
    showPage('book-detail');
}

function loadBookReviews(book) {
    const reviewsContainer = document.getElementById('book-reviews-container');
    const sampleReviews = [
        { author: "BookWorm23", rating: 5, review: "An absolute masterpiece! The character development is incredible." },
        { author: "ReadingFan", rating: 4, review: "Beautifully written with profound themes. Highly recommended." },
        { author: "LiteratureLover", rating: 5, review: "A timeless classic that everyone should read at least once." }
    ];
    
    reviewsContainer.innerHTML = sampleReviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <strong>${review.author}</strong>
                <span class="review-rating">★ ${review.rating}</span>
            </div>
            <p class="review-text">${review.review}</p>
        </div>
    `).join('');
}

function startReading(book) {
    if (!currentUser) {
        showPage('login');
        return;
    }
    
    currentBook = book;
    currentUser.currentReading = book.title;
    currentUser.readingProgress = currentUser.readingProgress || 0;
    
    // Update reader interface
    document.getElementById('reader-book-title').textContent = book.title;
    document.getElementById('reader-book-author').textContent = `by ${book.author}`;
    
    // Load book content (sample)
    loadBookContent();
    
    showPage('reader');
}

function loadBookContent() {
    const bookContent = document.getElementById('book-content');
    const sampleContent = `
        <h1>Chapter 1</h1>
        <p>When I was almost six years old, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his thumb parallel to his thigh.</p>
        
        <p>When enough years had gone by to enable us to look back on them, we sometimes discussed the events leading to his accident. I maintain that the Ewells started it all, but Jem, who was four years my senior, said it started long before that. He said it began the summer Dill came to us, when Dill first gave us the idea of making Boo Radley come out.</p>
        
        <p>If you know Maycomb, you know there was nothing to see. Going to town was a twenty-minute ride on horseback. To go to the courthouse we would have covered the twenty miles to the county seat. Maycomb was an old town, but it was a tired old town when I first knew it. In rainy weather the streets turned to red slop; grass grew on the sidewalks, the courthouse sagged in the square.</p>
        
        <p>People moved slowly then. They ambled across the square, shuffled in and out of the stores. A day was twenty-four hours long but seemed longer. There was no hurry, for there was nowhere to go, nothing to buy and no money to buy it with, nothing to see outside the boundaries of Maycomb County.</p>
    `;
    
    bookContent.innerHTML = sampleContent;
    
    // Update progress
    updateReadingProgress();
}

function updateReadingProgress() {
    const progress = Math.floor((currentPage / totalPages) * 100);
    const progressFill = document.getElementById('reader-progress-fill');
    const progressText = document.getElementById('reader-progress-text');
    
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
    if (progressText) {
        progressText.textContent = progress + '%';
    }
    
    // Update current page display
    document.getElementById('current-page').textContent = currentPage;
    document.getElementById('total-pages').textContent = totalPages;
    
    // Save progress to user
    if (currentUser) {
        currentUser.readingProgress = progress;
        localStorage.setItem('clublit-user', JSON.stringify(currentUser));
    }
}

// Club Detail Functions
function showClubDetail(clubId) {
    const club = applicationData.bookClubs.find(c => c.id === clubId);
    if (!club) return;
    
    currentClub = club;
    
    // Update club detail page
    document.getElementById('detail-club-image').src = club.image;
    document.getElementById('detail-club-name').textContent = club.name;
    document.getElementById('detail-club-description').textContent = club.description;
    document.getElementById('detail-club-members').textContent = `${club.members} members`;
    document.getElementById('detail-club-category').textContent = club.category;
    document.getElementById('detail-club-book').textContent = `Currently Reading: ${club.currentBook}`;
    document.getElementById('detail-club-meeting').textContent = `Next Meeting: ${formatDate(club.nextMeeting)}`;
    
    // Load club discussions
    loadClubDiscussions(clubId);
    
    // Load club members
    loadClubMembers(clubId);
    
    showPage('club-detail');
}

function loadClubDiscussions(clubId) {
    const discussionsList = document.getElementById('discussions-list');
    const clubDiscussions = applicationData.discussions.filter(d => d.clubId === clubId);
    
    discussionsList.innerHTML = clubDiscussions.map(discussion => `
        <div class="discussion-item" data-discussion-id="${discussion.id}">
            <div class="discussion-item__header">
                <h4 class="discussion-item__title">${discussion.title}</h4>
            </div>
            <div class="discussion-item__meta">
                <span class="discussion-author">by ${discussion.author}</span>
                <span class="discussion-replies">${discussion.replies} replies</span>
                <span class="discussion-activity">${discussion.lastActivity}</span>
            </div>
            <p class="discussion-item__preview">${discussion.preview}</p>
            <button class="btn btn--outline btn--sm" onclick="showDiscussionDetail(${discussion.id})">Read More</button>
        </div>
    `).join('');
}

function loadClubMembers(clubId) {
    const membersContainer = document.getElementById('members-container');
    const sampleMembers = [
        { name: "Alex Reader", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop", role: "Member" },
        { name: "Sarah M.", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c?w=50&h=50&fit=crop", role: "Moderator" },
        { name: "Mike L.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop", role: "Member" }
    ];
    
    membersContainer.innerHTML = sampleMembers.map(member => `
        <div class="member-item">
            <img src="${member.avatar}" alt="${member.name}" class="member-avatar">
            <div class="member-info">
                <h4>${member.name}</h4>
                <span class="member-role">${member.role}</span>
            </div>
        </div>
    `).join('');
}

// Dashboard Functions
function loadUserDashboard() {
    if (!currentUser) return;
    
    // Update current reading
    const currentBook = applicationData.books.find(b => b.title === currentUser.currentReading);
    if (currentBook) {
        document.querySelector('.current-book-cover').src = currentBook.cover;
        document.querySelector('.current-book-title').textContent = currentBook.title;
        document.querySelector('.current-book-author').textContent = `by ${currentBook.author}`;
        
        // Update progress
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        progressFill.style.width = currentUser.readingProgress + '%';
        progressText.textContent = currentUser.readingProgress + '%';
    }
    
    // Update reading statistics
    document.getElementById('books-read').textContent = currentUser.booksRead;
    document.getElementById('pages-read').textContent = currentUser.booksRead * 300; // Estimate
    document.getElementById('reading-days').textContent = currentUser.booksRead * 7; // Estimate
    document.getElementById('club-posts').textContent = currentUser.clubsJoined * 5; // Estimate
    
    // Load recommendations
    loadRecommendations();
    
    // Load user clubs
    loadUserClubs();
}

function loadRecommendations() {
    const recommendationsGrid = document.getElementById('recommendations-grid');
    if (!recommendationsGrid) return;
    
    // Filter books based on user preferences
    const recommendedBooks = applicationData.books.filter(book => {
        return currentUser.preferences.some(pref => 
            book.genre.includes(pref) || book.tags.includes(pref)
        );
    }).slice(0, 3);
    
    recommendationsGrid.innerHTML = recommendedBooks.map(book => `
        <div class="recommendation-item" data-book-id="${book.id}">
            <img src="${book.cover}" alt="${book.title}" class="recommendation-cover">
            <div class="recommendation-info">
                <h4>${book.title}</h4>
                <p>by ${book.author}</p>
                <span class="recommendation-rating">★ ${book.rating}</span>
            </div>
        </div>
    `).join('');
}

function loadUserClubs() {
    const userClubsContainer = document.getElementById('user-clubs');
    if (!userClubsContainer) return;
    
    // Show first two clubs as examples
    const userClubs = applicationData.bookClubs.slice(0, 2);
    
    userClubsContainer.innerHTML = userClubs.map(club => `
        <div class="user-club-item">
            <div class="club-info">
                <h4>${club.name}</h4>
                <p>Currently reading: ${club.currentBook}</p>
                <p>Next meeting: ${formatDate(club.nextMeeting)}</p>
            </div>
            <button class="btn btn--outline btn--sm" onclick="showClubDetail(${club.id})">Join Discussion</button>
        </div>
    `).join('');
}

// Admin Dashboard Functions
function loadAdminDashboard() {
    // Update analytics summary
    document.getElementById('total-users').textContent = applicationData.analytics.totalUsers.toLocaleString();
    document.getElementById('active-users').textContent = applicationData.analytics.activeUsers.toLocaleString();
    document.getElementById('total-books').textContent = applicationData.analytics.totalBooks.toLocaleString();
    document.getElementById('total-clubs').textContent = applicationData.analytics.totalClubs.toLocaleString();
    
    // Load charts
    loadAdminCharts();
    
    // Load user management table
    loadUsersTable();
    
    // Load content management
    loadBooksTable();
    loadClubsTable();
    
    // Load moderation content
    loadModerationContent();
}

function loadAdminCharts() {
    // Daily Reading Chart
    const readingCtx = document.getElementById('reading-chart');
    if (readingCtx) {
        new Chart(readingCtx, {
            type: 'line',
            data: {
                labels: applicationData.analytics.dailyReading.map(d => formatDate(d.date)),
                datasets: [{
                    label: 'Daily Reading Hours',
                    data: applicationData.analytics.dailyReading.map(d => d.hours),
                    borderColor: '#21808D',
                    backgroundColor: 'rgba(33, 128, 141, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // Popular Genres Chart
    const genresCtx = document.getElementById('genres-chart');
    if (genresCtx) {
        new Chart(genresCtx, {
            type: 'doughnut',
            data: {
                labels: applicationData.analytics.popularGenres.map(g => g.genre),
                datasets: [{
                    data: applicationData.analytics.popularGenres.map(g => g.percentage),
                    backgroundColor: [
                        '#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
}

function loadUsersTable() {
    const usersTableBody = document.getElementById('users-table-body');
    if (!usersTableBody) return;
    
    usersTableBody.innerHTML = applicationData.users.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><span class="status status--${user.role === 'admin' ? 'warning' : 'success'}">${user.role}</span></td>
            <td>${user.booksRead}</td>
            <td>${user.clubsJoined}</td>
            <td>
                <button class="btn btn--outline btn--sm">Edit</button>
                <button class="btn btn--outline btn--sm">Delete</button>
            </td>
        </tr>
    `).join('');
}

function loadBooksTable() {
    const booksTableBody = document.getElementById('books-table-body');
    if (!booksTableBody) return;
    
    booksTableBody.innerHTML = applicationData.books.map(book => `
        <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre.join(', ')}</td>
            <td>★ ${book.rating}</td>
            <td>${book.published}</td>
            <td>
                <button class="btn btn--outline btn--sm">Edit</button>
                <button class="btn btn--outline btn--sm">Delete</button>
            </td>
        </tr>
    `).join('');
}

function loadClubsTable() {
    const clubsTableBody = document.getElementById('clubs-table-body');
    if (!clubsTableBody) return;
    
    clubsTableBody.innerHTML = applicationData.bookClubs.map(club => `
        <tr>
            <td>${club.id}</td>
            <td>${club.name}</td>
            <td>${club.category}</td>
            <td>${club.members}</td>
            <td>${club.currentBook}</td>
            <td>${formatDate(club.nextMeeting)}</td>
            <td>
                <button class="btn btn--outline btn--sm">Edit</button>
                <button class="btn btn--outline btn--sm">Delete</button>
            </td>
        </tr>
    `).join('');
}

function loadModerationContent() {
    const discussionsModeration = document.getElementById('discussions-moderation');
    const reportsModeration = document.getElementById('reports-moderation');
    
    if (discussionsModeration) {
        discussionsModeration.innerHTML = applicationData.discussions.map(discussion => `
            <div class="moderation-item">
                <h4>${discussion.title}</h4>
                <p>by ${discussion.author} • ${discussion.lastActivity}</p>
                <p>${discussion.preview}</p>
                <div class="moderation-actions">
                    <button class="btn btn--primary btn--sm">Approve</button>
                    <button class="btn btn--outline btn--sm">Edit</button>
                    <button class="btn btn--outline btn--sm">Delete</button>
                </div>
            </div>
        `).join('');
    }
    
    if (reportsModeration) {
        reportsModeration.innerHTML = `
            <div class="moderation-item">
                <h4>Inappropriate Content Report</h4>
                <p>Reported by: User123 • 1 hour ago</p>
                <p>Content contains offensive language in discussion thread.</p>
                <div class="moderation-actions">
                    <button class="btn btn--primary btn--sm">Review</button>
                    <button class="btn btn--outline btn--sm">Dismiss</button>
                </div>
            </div>
        `;
    }
}

// Reader Controls
function setupReaderControls() {
    // Font size controls
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('font-size-increase')) {
            adjustFontSize(1);
        } else if (e.target.classList.contains('font-size-decrease')) {
            adjustFontSize(-1);
        }
    });
    
    // Page navigation
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('prev-page')) {
            if (currentPage > 1) {
                currentPage--;
                updateReadingProgress();
            }
        } else if (e.target.classList.contains('next-page')) {
            if (currentPage < totalPages) {
                currentPage++;
                updateReadingProgress();
            }
        }
    });
    
    // Continue reading button
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('continue-reading')) {
            if (currentUser && currentUser.currentReading) {
                const book = applicationData.books.find(b => b.title === currentUser.currentReading);
                if (book) {
                    startReading(book);
                }
            }
        }
    });
}

function adjustFontSize(change) {
    const bookContent = document.getElementById('book-content');
    if (!bookContent) return;
    
    const currentSize = parseInt(window.getComputedStyle(bookContent).fontSize);
    const newSize = currentSize + (change * 2);
    
    if (newSize >= 12 && newSize <= 24) {
        bookContent.style.fontSize = newSize + 'px';
    }
}

// Tab Navigation
function setupTabNavigation() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tab-btn')) {
            const tabId = e.target.getAttribute('data-tab');
            
            // Remove active class from all tabs
            e.target.parentElement.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked tab
            e.target.classList.add('active');
            
            // Hide all tab panes
            const tabContent = e.target.closest('.club-tabs, .admin-tabs').querySelector('.tab-content');
            tabContent.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            
            // Show target tab pane
            const targetPane = document.getElementById(tabId + '-tab');
            if (targetPane) {
                targetPane.classList.add('active');
            }
        }
        
        // Handle content tabs in admin
        if (e.target.classList.contains('content-tab')) {
            const contentId = e.target.getAttribute('data-content');
            
            // Remove active class from all content tabs
            e.target.parentElement.querySelectorAll('.content-tab').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked tab
            e.target.classList.add('active');
            
            // Hide all content panes
            document.querySelectorAll('.content-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            
            // Show target content pane
            const targetPane = document.getElementById(contentId + '-content');
            if (targetPane) {
                targetPane.classList.add('active');
            }
        }
    });
}

// Chatbot Functionality
function setupChatbot() {
    const chatbotToggle = document.querySelector('.chatbot-toggle-btn');
    const chatbotPanel = document.querySelector('.chatbot-panel');
    const chatbotClose = document.querySelector('.chatbot-close-btn');
    
    chatbotToggle.addEventListener('click', function() {
        chatbotPanel.classList.toggle('hidden');
    });
    
    chatbotClose.addEventListener('click', function() {
        chatbotPanel.classList.add('hidden');
    });
}

function setupChatbotInteraction() {
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-message');
    
    if (chatbotForm) {
        chatbotForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const message = chatbotInput.value.trim();
            if (!message) return;
            
            // Add user message
            addChatbotMessage(message, 'user');
            
            // Clear input
            chatbotInput.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                const response = generateChatbotResponse(message);
                addChatbotMessage(response, 'bot');
            }, 1000);
        });
    }
}

function addChatbotMessage(message, sender) {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.className = `chatbot-message ${sender}`;
    messageElement.innerHTML = `<div class="message-content">${message}</div>`;
    
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function generateChatbotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('book') && message.includes('recommend')) {
        return "I'd be happy to recommend books! Based on popular choices, you might enjoy 'To Kill a Mockingbird' or 'Dune'. What genres do you prefer?";
    } else if (message.includes('club') || message.includes('join')) {
        return "Great! We have several active book clubs. The Classic Literature Circle and Sci-Fi Enthusiasts are very popular. Would you like me to show you more details?";
    } else if (message.includes('help') || message.includes('how')) {
        return "I can help you navigate Club Lit! You can discover books, join clubs, track reading progress, and connect with other readers. What would you like to know more about?";
    } else if (message.includes('read') || message.includes('progress')) {
        return "You can track your reading progress in your dashboard. Each book you read will sync across all your devices!";
    } else {
        return "Thanks for your message! I'm here to help you make the most of Club Lit. Feel free to ask about books, clubs, or any features you'd like to explore.";
    }
}

// Search and Filter Functions
function filterBooks() {
    const searchTerm = document.getElementById('book-search')?.value.toLowerCase() || '';
    const selectedGenre = document.getElementById('genre-filter')?.value || '';
    const sortBy = document.getElementById('sort-books')?.value || 'rating';
    
    filteredBooks = applicationData.books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) ||
                            book.author.toLowerCase().includes(searchTerm) ||
                            book.description.toLowerCase().includes(searchTerm);
        
        const matchesGenre = !selectedGenre || book.genre.includes(selectedGenre);
        
        return matchesSearch && matchesGenre;
    });
    
    // Sort books
    filteredBooks.sort((a, b) => {
        switch(sortBy) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'author':
                return a.author.localeCompare(b.author);
            case 'published':
                return parseInt(b.published) - parseInt(a.published);
            default: // rating
                return b.rating - a.rating;
        }
    });
    
    loadBooks();
}

// Carousel Controls
function setupCarouselControls() {
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (prevBtn && nextBtn) {
        let currentIndex = 0;
        const totalItems = 3;
        
        prevBtn.addEventListener('click', function() {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
            updateCarousel(currentIndex);
        });
        
        nextBtn.addEventListener('click', function() {
            currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
            updateCarousel(currentIndex);
        });
    }
}

function updateCarousel(index) {
    const bookGrid = document.getElementById('featured-books-grid');
    if (bookGrid) {
        const scrollAmount = index * 240; // Approximate card width + gap
        bookGrid.style.transform = `translateX(-${scrollAmount}px)`;
    }
}

// Admin Dashboard Setup
function setupAdminDashboard() {
    // This would include more complex admin functionality
    // For now, we'll keep it simple with basic table interactions
}

// Chart Setup
function setupCharts() {
    // Charts are initialized when the admin dashboard loads
    // This function ensures Chart.js is ready
}

// User Profile Functions
function loadUserProfile() {
    if (!currentUser) return;
    
    // Update profile form with current user data
    document.getElementById('profile-name').value = currentUser.name;
    document.getElementById('profile-email').value = currentUser.email;
    document.getElementById('profile-avatar').src = currentUser.avatar;
    document.getElementById('profile-books-read').textContent = currentUser.booksRead;
    document.getElementById('profile-clubs-joined').textContent = currentUser.clubsJoined;
    
    // Update preferences checkboxes
    currentUser.preferences.forEach(pref => {
        const checkbox = document.getElementById(`pref-${pref.toLowerCase().replace(' ', '')}`);
        if (checkbox) {
            checkbox.checked = true;
        }
    });
    
    // Setup profile form submission
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Update user data
            currentUser.name = document.getElementById('profile-name').value;
            currentUser.email = document.getElementById('profile-email').value;
            
            // Update preferences
            const newPreferences = [];
            document.querySelectorAll('#profile-form input[type="checkbox"]:checked').forEach(cb => {
                newPreferences.push(cb.value);
            });
            currentUser.preferences = newPreferences;
            
            // Save to localStorage
            localStorage.setItem('clublit-user', JSON.stringify(currentUser));
            
            // Update UI
            updateAuthUI();
            showNotification('Profile updated successfully!', 'success');
        });
    }
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-${type === 'error' ? 'error' : type === 'success' ? 'success' : 'info'});
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Discussion Detail Functions
function showDiscussionDetail(discussionId) {
    const discussion = applicationData.discussions.find(d => d.id === discussionId);
    if (!discussion) return;
    
    // Update discussion detail page
    document.getElementById('discussion-title').textContent = discussion.title;
    document.getElementById('discussion-author').textContent = `by ${discussion.author}`;
    document.getElementById('discussion-date').textContent = discussion.lastActivity;
    document.getElementById('discussion-content').innerHTML = `
        <p>${discussion.preview}</p>
        <p>This is where the full discussion content would appear. Users can engage in detailed conversations about the books they're reading, share insights, ask questions, and connect with fellow readers who share their literary interests.</p>
    `;
    
    // Load sample replies
    loadDiscussionReplies(discussionId);
    
    // Setup back button
    document.getElementById('back-to-club').addEventListener('click', function() {
        showClubDetail(discussion.clubId);
    });
    
    // Setup reply form
    const replyForm = document.getElementById('reply-form');
    replyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!currentUser) {
            showNotification('Please log in to post replies', 'error');
            return;
        }
        
        const replyContent = document.getElementById('reply-content').value;
        if (replyContent.trim()) {
            addReply(discussionId, replyContent);
            document.getElementById('reply-content').value = '';
        }
    });
    
    showPage('discussion-detail');
}

function loadDiscussionReplies(discussionId) {
    const repliesList = document.getElementById('replies-list');
    const sampleReplies = [
        { author: "Alex Reader", date: "2 hours ago", content: "I completely agree! The character development in this chapter really shows the author's skill." },
        { author: "Sarah M.", date: "1 hour ago", content: "The historical context adds so much depth to the story. Has anyone read other books from this time period?" },
        { author: "Mike L.", date: "30 minutes ago", content: "Great points everyone! I'm particularly interested in how the themes relate to modern society." }
    ];
    
    repliesList.innerHTML = sampleReplies.map(reply => `
        <div class="reply-item">
            <div class="reply-item__header">
                <span class="reply-item__author">${reply.author}</span>
                <span class="reply-item__date">${reply.date}</span>
            </div>
            <p class="reply-item__content">${reply.content}</p>
        </div>
    `).join('');
}

function addReply(discussionId, content) {
    const repliesList = document.getElementById('replies-list');
    const newReply = document.createElement('div');
    newReply.className = 'reply-item';
    newReply.innerHTML = `
        <div class="reply-item__header">
            <span class="reply-item__author">${currentUser.name}</span>
            <span class="reply-item__date">Just now</span>
        </div>
        <p class="reply-item__content">${content}</p>
    `;
    
    repliesList.appendChild(newReply);
    showNotification('Reply posted successfully!', 'success');
}

// Live Chat Functions
function showLiveChat(clubId) {
    currentClub = applicationData.bookClubs.find(c => c.id === clubId);
    if (!currentClub) return;
    
    document.getElementById('chat-club-name').textContent = currentClub.name;
    document.getElementById('chat-members-online').textContent = `${Math.floor(currentClub.members * 0.1)} members online`;
    
    // Load chat history
    loadChatHistory();
    
    // Setup chat form
    const chatForm = document.getElementById('chat-form');
    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!currentUser) {
            showNotification('Please log in to participate in chat', 'error');
            return;
        }
        
        const message = document.getElementById('chat-message').value;
        if (message.trim()) {
            addChatMessage(currentUser.name, message, 'user');
            document.getElementById('chat-message').value = '';
            
            // Simulate response from other users
            setTimeout(() => {
                const responses = [
                    "That's a great point!",
                    "I hadn't thought of it that way.",
                    "Have you read the author's other works?",
                    "This chapter really resonated with me too."
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addChatMessage("Club Member", randomResponse, 'other');
            }, 2000);
        }
    });
    
    showPage('live-chat');
}

function loadChatHistory() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = applicationData.chatHistory.map(msg => `
        <div class="chat-message ${msg.sender === currentUser?.name ? 'user' : 'other'}">
            <div class="chat-message__header">
                <span class="chat-message__author">${msg.sender}</span>
                <span class="chat-message__time">${msg.time}</span>
            </div>
            <div class="chat-message__content">${msg.message}</div>
        </div>
    `).join('');
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addChatMessage(sender, message, type) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${type}`;
    messageElement.innerHTML = `
        <div class="chat-message__header">
            <span class="chat-message__author">${sender}</span>
            <span class="chat-message__time">Just now</span>
        </div>
        <div class="chat-message__content">${message}</div>
    `;
    
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initialize the application
// The DOMContentLoaded event listener at the top will start everything