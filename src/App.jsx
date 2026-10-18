import {
  Home,
  CalendarDays,
  Bell,
  MapPin,
  Search,
  Menu,
  UserRound,
  Compass,
  Megaphone,
  PackageSearch,
  BookOpen,
  Bus,
  Utensils,
  Settings,
  ChevronRight,
  Clock,
  MapPinned,
  ArrowUpRight,
  GraduationCap,
  Plus,
} from "lucide-react";

import "./App.css";

const navigation = [
  { name: "Dashboard", icon: Home },
  { name: "Events", icon: CalendarDays, count: "4" },
  { name: "Notices", icon: Megaphone },
  { name: "Campus Map", icon: MapPin },
  { name: "Student Safety", icon: Compass },
  { name: "Lost & Found", icon: PackageSearch },
  { name: "Mess & Food", icon: Utensils },
  { name: "Transportation", icon: Bus },
  { name: "Study Materials", icon: BookOpen },
];

const events = [
  {
    day: "22",
    month: "OCT",
    title: "Annual Tech Fest",
    category: "TECHNOLOGY",
    time: "10:00 AM – 4:00 PM",
    location: "Main Auditorium",
    color: "purple",
  },
  {
    day: "24",
    month: "OCT",
    title: "AI & Innovation Workshop",
    category: "WORKSHOP",
    time: "11:00 AM – 1:00 PM",
    location: "Computer Lab 3",
    color: "teal",
  },
  {
    day: "27",
    month: "OCT",
    title: "Campus Sports Day",
    category: "SPORTS",
    time: "9:00 AM – 3:00 PM",
    location: "Sports Ground",
    color: "orange",
  },
];

const notices = [
  {
    title: "Mid-semester examination schedule released",
    date: "Today · 10:30 AM",
    tag: "ACADEMIC",
    color: "blue",
  },
  {
    title: "Library timings extended for examination week",
    date: "Yesterday · 2:15 PM",
    tag: "GENERAL",
    color: "green",
  },
  {
    title: "Registration open for the annual tech fest",
    date: "15 Oct 2026",
    tag: "EVENT",
    color: "orange",
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <MapPinned size={25} />
        </div>

        <div>
          <h2>Campus<span>Radar</span></h2>
          <p>Your campus, connected.</p>
        </div>
      </div>

      <div className="sidebar-label">MAIN MENU</div>

      <nav className="navigation">
        {navigation.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              className={`nav-item ${index === 0 ? "active" : ""}`}
              key={item.name}
            >
              <Icon size={19} />
              <span>{item.name}</span>
              {item.count && <small>{item.count}</small>}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <button className="nav-item">
          <Settings size={19} />
          <span>Settings</span>
        </button>

        <div className="help-card">
          <div className="help-icon">
            <GraduationCap size={23} />
          </div>
          <h4>Need some help?</h4>
          <p>Find your way around campus.</p>
          <button>
            Explore campus <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="sidebar-footer">
          <div className="avatar">AC</div>
          <div className="profile-info">
            <strong>Campus Student</strong>
            <span>Student account</span>
          </div>
          <Settings size={17} />
        </div>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="topbar">
      <button className="mobile-menu" aria-label="Menu">
        <Menu size={22} />
      </button>

      <div className="breadcrumb">
        <span>Pages</span>
        <ChevronRight size={15} />
        <strong>Dashboard</strong>
      </div>

      <div className="topbar-actions">
        <label className="search-box">
          <Search size={18} />
          <input placeholder="Search anything..." />
          <kbd>⌘ K</kbd>
        </label>

        <button className="icon-button notification-button" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="top-profile">
          <div className="avatar">AC</div>
          <div>
            <strong>Student</strong>
            <span>Computer Science</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function WelcomeBanner() {
  return (
    <section className="welcome-banner">
      <div className="welcome-content">
        <span className="welcome-label">
          <span className="status-dot"></span>
          YOUR CAMPUS AT A GLANCE
        </span>

        <h1>Good day, Student! 👋</h1>

        <p>
          Everything happening on your campus, all in one place.
          Stay informed, stay connected.
        </p>

        <button className="primary-button">
          Explore campus <ArrowUpRight size={17} />
        </button>
      </div>

      <div className="welcome-art">
        <div className="art-circle circle-one"></div>
        <div className="art-circle circle-two"></div>

        <div className="campus-building">
          <div className="building-roof"></div>
          <div className="building-body">
            <div className="building-sign">
              <GraduationCap size={31} />
            </div>
            <div className="building-columns">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="building-door"></div>
          </div>
          <div className="building-base"></div>
        </div>

        <div className="floating-card floating-calendar">
          <CalendarDays size={18} />
          <div>
            <strong>12 Events</strong>
            <span>This month</span>
          </div>
        </div>

        <div className="floating-card floating-pin">
          <MapPin size={19} />
          <span>Find your way</span>
        </div>
      </div>

      <div className="banner-decoration"></div>
    </section>
  );
}

function QuickStats() {
  const stats = [
    {
      title: "Upcoming Events",
      value: "12",
      note: "3 happening this week",
      icon: CalendarDays,
      color: "stat-purple",
    },
    {
      title: "Latest Notices",
      value: "08",
      note: "2 new announcements",
      icon: Megaphone,
      color: "stat-blue",
    },
    {
      title: "Campus Locations",
      value: "24",
      note: "Explore your campus",
      icon: MapPin,
      color: "stat-teal",
    },
    {
      title: "Lost & Found",
      value: "06",
      note: "Items recently reported",
      icon: PackageSearch,
      color: "stat-orange",
    },
  ];

  return (
    <section className="stats-grid">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article className="stat-card" key={stat.title}>
            <div className={`stat-icon ${stat.color}`}>
              <Icon size={21} />
            </div>

            <p>{stat.title}</p>
            <div className="stat-value">{stat.value}</div>
            <span className="stat-note">{stat.note}</span>
            <ArrowUpRight className="stat-arrow" size={17} />
          </article>
        );
      })}
    </section>
  );
}

function SectionHeading({ title, subtitle, action }) {
  return (
    <div className="section-heading">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <button className="text-button">
        {action} <ChevronRight size={16} />
      </button>
    </div>
  );
}

function UpcomingEvents() {
  return (
    <section className="panel events-panel">
      <SectionHeading
        title="Upcoming Events"
        subtitle="Don't miss what's happening around you."
        action="View all"
      />

      <div className="events-list">
        {events.map((event) => (
          <article className="event-item" key={event.title}>
            <div className={`event-date ${event.color}`}>
              <strong>{event.day}</strong>
              <span>{event.month}</span>
            </div>

            <div className="event-details">
              <span className={`event-category ${event.color}`}>
                {event.category}
              </span>

              <h3>{event.title}</h3>

              <div className="event-meta">
                <span><Clock size={14} /> {event.time}</span>
                <span><MapPin size={14} /> {event.location}</span>
              </div>
            </div>

            <button
              className="event-arrow"
              aria-label={`View ${event.title}`}
            >
              <ChevronRight size={19} />
            </button>
          </article>
        ))}
      </div>

      <button className="outline-button">
        <Plus size={17} /> Discover more events
      </button>
    </section>
  );
}

function NoticesPanel() {
  return (
    <section className="panel notices-panel">
      <SectionHeading
        title="Latest Notices"
        subtitle="Stay up to date with campus news."
        action="View all"
      />

      <div className="notices-list">
        {notices.map((notice) => (
          <article className="notice-item" key={notice.title}>
            <div className={`notice-icon ${notice.color}`}>
              <Megaphone size={19} />
            </div>

            <div className="notice-content">
              <span className={`notice-tag ${notice.color}`}>
                {notice.tag}
              </span>
              <h3>{notice.title}</h3>
              <p>{notice.date}</p>
            </div>

            <ChevronRight size={17} className="notice-arrow" />
          </article>
        ))}
      </div>

      <button className="outline-button">
        Browse all announcements <ChevronRight size={16} />
      </button>
    </section>
  );
}

function CampusMap() {
  return (
    <section className="panel map-panel">
      <SectionHeading
        title="Explore Campus"
        subtitle="Find your next destination."
        action="Open map"
      />

      <div className="map-preview">
        <div className="map-road road-horizontal"></div>
        <div className="map-road road-vertical"></div>
        <div className="map-road road-diagonal"></div>

        <div className="map-green green-one"></div>
        <div className="map-green green-two"></div>
        <div className="map-green green-three"></div>

        <div className="map-building map-building-one">
          <GraduationCap size={19} />
          <span>Main Block</span>
        </div>

        <div className="map-building map-building-two">
          <BookOpen size={17} />
          <span>Library</span>
        </div>

        <div className="map-building map-building-three">
          <Utensils size={17} />
          <span>Cafeteria</span>
        </div>

        <div className="map-building map-building-four">
          <Bus size={17} />
          <span>Bus Stop</span>
        </div>

        <div className="map-pin">
          <MapPin size={21} />
        </div>

        <div className="map-label">
          <MapPin size={15} /> Campus overview
        </div>

        <div className="map-zoom">
          <button aria-label="Zoom in">+</button>
          <button aria-label="Zoom out">−</button>
        </div>
      </div>

      <div className="map-footer">
        <div>
          <span className="map-footer-icon"><MapPin size={17} /></span>
          <div>
            <strong>Campus directory</strong>
            <p>Explore important locations</p>
          </div>
        </div>

        <button className="round-arrow" aria-label="Open campus directory">
          <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="panel highlights-panel">
      <SectionHeading
        title="Today's Highlights"
        subtitle="A quick look at campus life."
        action="Explore"
      />

      <div className="highlight-grid">
        <article className="highlight-card highlight-food">
          <div className="highlight-emoji">🍽️</div>
          <span>MESS & FOOD</span>
          <h3>Today's Menu</h3>
          <p>Check today's meals and cafeteria updates.</p>
          <button aria-label="View today's menu"><ArrowUpRight size={17} /></button>
        </article>

        <article className="highlight-card highlight-safety">
          <div className="highlight-emoji">🛡️</div>
          <span>STUDENT SAFETY</span>
          <h3>Campus Help</h3>
          <p>Quick access to important campus contacts.</p>
          <button aria-label="View campus help"><ArrowUpRight size={17} /></button>
        </article>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <Topbar />

        <div className="dashboard-content">
          <WelcomeBanner />
          <QuickStats />

          <div className="content-grid">
            <UpcomingEvents />
            <NoticesPanel />
            <CampusMap />
            <Highlights />
          </div>

          <footer className="page-footer">
            <span>© 2026 Campus Radar</span>
            <span>Made for a more connected campus <span className="footer-heart">♥</span></span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;