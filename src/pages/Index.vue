<template>
  <q-page padding class="homepage">
    <!-- About Me -->
    <section class="text-center q-my-xl q-py-xl">
      <div>
        <q-avatar size="150px">
          <img src="../statics/ryanmason.jpeg">
        </q-avatar>
        <div class="text-h3 text-weight-bold text-blue-grey-9">Ryan Mason</div>
        <q-chip class="q-mb-md">
          <q-avatar icon="email" color="blue" text-color="white" />
          <span class="email text-blue-grey-9">moc.liamg@rajnosamnayr</span>
        </q-chip>
        <!-- <q-badge class="q-mb-md" color="blue">
          <span class="email text-weight-medium">moc.liamg@rajnosamnayr</span>
        </q-badge> -->
        <p class="about-me text-weight-light text-blue-grey-9">
          Graduated from Rochester Institute of Technology with a Bachelor of
          Science in Information Technology. While there, grew to love web
          design and development. Skilled in programming, documenting, testing,
          and bug fixing to produce clean and commented code. Proficient with a
          wide variety of web development frameworks. Proven track record of
          success with remote work. Always expanding knowledge of user
          experience and interface design.
        </p>
        <a href="https://www.linkedin.com/in/ryanmichaelmason/" target="_blank">
          <i class="fab fa-linkedin-in text-h4 q-px-sm" style="color:#0077b5"></i>
        </a>
        <a href="https://github.com/Rytiggy/" target="_blank">
          <i class="fab fa-github text-h4 q-px-sm" style="color:#212529"></i>
        </a>
        <a href="https://twitter.com/ryanmasonjar" target="_blank">
          <i class="fab fa-twitter text-h4 q-px-sm" style="color:#1da1f2"></i>
        </a>
      </div>
    </section>
    <!-- Projects -->
    <section>
      <projects :projects="projects" />
    </section>
    <!-- Timeline - Work experiense -->
    <section>
      <timeline heading="Work Experience" :timeline="timeline" />
    </section>
    <!-- Timeline - Education -->
    <section>
      <timeline heading="Education" :timeline="education" />
    </section>
  </q-page>
</template>

<script>
import projects from "../components/projects.vue";
import timeline from "../components/timeline.vue";

export default {
  components: {
    projects,
    timeline
  },
  data() {
    return {
      timeline: [
        {
          title: "Lumin",
          date: "2019 - Present",
          logo: "./statics/lumin.png",
          url: "https://www.luminsmart.com/",
          roles: [
            {
              title: "UI/UX Engineer",
              description: `Responsible for the development of the user experience and user interface for the Lumin Energy Management Platform and other Company products.`,
              date: "July 2019 - Current"
            }
          ]
        },
        {
          title: "221b",
          date: "2018 - 2019",
          logo: "./statics/221b.png",
          url: "http://221b-dev.surge.sh/",
          roles: [
            {
              title: "Software Developer",
              description: `Provides application development and consulting services to clients including Johns Hopkins University, Notre Dame, and Databrary to develop products from concept to delivery while expressing complex ideas clearly and succinctly. Specializes in rapid incremental prototyping and delivering beautifully written software to our clients. Focuses on using universally agreed upon best practices and utilizing constant user-testing along the way to continually deliver high quality products. Working with frameworks such as Ember.js, Vue.js, and Nuxt.js. Proficient with Node.js to build web scrapers with puppeteer (headless Chrome node API). Presented “Decentralizing SHARE & Research” at the <a class="text-blue" href="https://cnifall2018membershipmeeting.sched.com/event/IOXb" target="_blank">Coalition for Networked Information Membership Conference</a> (CNI).`,
              date: "Feb 2018 - July 2019"
            }
          ]
        },
        {
          title: "The Center for Open Science",
          date: "2016 - 2018",
          logo: "./statics/cos.png",
          url: "https://cos.io/",
          roles: [
            {
              title: "Junior Software Developer",
              description: `Worked on the Labs team using rapid incremental prototyping to create experimental products, such as Public Access Submission System and Open Science Framework Pages.  Developed proficiency in Ember.js while interfacing with a variety of databases including Firebase and Django.`,
              date: "Jun 2017 - Jan 2018"
            },
            {
              title: "Developer Intern",
              description: `Developed web applications following software design principles, collaborating with teams of developers, working with Ember.js and Django REST API frameworks.`,
              date: "May 2016 - Jun 2017"
            }
          ]
        },
        {
          title: "RIT - Information & Technology Services",
          date: "2015 - 2016",
          logo: "./statics/rit-its.png",
          url: "https://www.rit.edu/its/",
          roles: [
            {
              title: "Lab Technician",
              description: `Worked at the <i>College of Imaging Arts and Sciences</i> providing technical support to students, maintaining, fixing, upgrading computers, and providing end user support for computer labs on the Rochester Institute of Technology campus.`,
              date: "Jan 2016 - May 2016"
            },
            {
              title: "Assistant System Administrator",
              description: `Worked at the <i>College of Science</i> providing technical support for faculty and staff at Rochester Institute of Technology. Performed backup, restore, upgrades, and software installations for Mac and Windows computers.`,
              date: "Apr 2015 - Jan 2016"
            }
          ]
        }
      ],
      education: [
        {
          title: "Rochester Institute Of Technology",
          date: "Aug 2013 - May 2017",
          logo: "./statics/rit.png",
          url: "http://www.rit.edu/",
          roles: [
            {
              title: "Information Technology",
              description: `Received a Bachelor's degree from Rochester Institute of Technology in Information Technology with an immersion in Web and Mobile Design and a concentration in Communications.`,
              date: "Aug 2013 - May 2017",
            },
          ],
        }
      ],
      projects: [
        {
          title: "Glance",
          description:
            "Glance is a application for use with Fitbit devices to view your blood glucose levels along with a variety of other health stats on the watch face. You can see your stats at a glance!",
          technologys: [
            {
              name: "Fitbit SDK",
              color: "#00B0B9",
              textColor: "#ffffff"
            },
            {
              name: "Javascript",
              color: "#efd65c",
              textColor: "#4b4848"
            }
          ],
          images: [
            {
              url: "https://image.ibb.co/fbiG9U/versa-Ionic.png",
              active: "active"
            }
          ],
          date: "Ongoing",
          url: "https://github.com/Rytiggy/Glance"
        },
        {
          title: "Public Access Submission System",
          description:
            "The Public Access Submission System (PASS) is a platform built to assist researchers in complying with the access policies of their funders and institutions.",
          technologys: [
            {
              name: "Ember",
              color: "#E04E39",
              textColor: "#ffffff"
            },
            {
              name: "Fedora",
              color: "#c7353c",
              textColor: "#ffffff"
            }
          ],
          images: [
            {
              url: "https://image.ibb.co/efq6Mo/pass_ui.png",
              active: "active"
            },
            {
              url: "https://image.ibb.co/emdqE8/image1.png",
              active: ""
            }
          ],
          date: "6-30-18",
          url: "https://pass.jhu.edu/"
        },
        {
          title: "Hotel Finder",
          description:
            "Find and locate hotels with a simple click of a button. Clean UI focused on material design built on Leaflet.js. Sharable URL's for easy sharing of hotles you find!",
          technologys: [
            {
              name: "Quasar",
              color: "#027be3",
              textColor: "#ffffff"
            },
            {
              name: "Express",
              color: "#e2e4e6",
              textColor: "#494646"
            }
          ],
          images: [
            {
              url:
                "https://i.ibb.co/4jGcSVH/Screen-Shot-2019-06-24-at-2-39-21-PM.png"
            },
            {
              url: 
                "https://i.ibb.co/s90k94j/Screen-Shot-2019-06-25-at-7-02-44-PM.png"
            }
          ],
          date: "6-30-18",
          url: "http://hotelfinder.surge.sh/#/"
        },
                {
          title: "OSF Pages",
          description:
            "OSF Pages is an Open Science Framework (OSF) add-on and website builder that helps OSF users build beautiful websites very quickly using their existing project details.",
          technologys: [
            {
              name: "Ember",
              color: "#E04E39",
              textColor: "#ffffff"
            },
            {
              name: "Django",
              color: "#152c1f",
              textColor: "#ffffff"
            }
          ],
          images: [
            {
              url: "https://media.giphy.com/media/5vUz649RO6dKqCuo0k/giphy.gif",
              active: "active"
            },
            {
              url: "https://media.giphy.com/media/QMKntqhT23aV2KjGtO/giphy.gif",
              active: ""
            },
            {
              url: "https://media.giphy.com/media/7NISJvZeh48MeNvTNe/giphy.gif",
              active: ""
            }
          ],
          date: "2-01-18",
          url: "https://github.com/cos-labs/osfpages"
        },
        {
          title: "Talk About",
          description:
            "Talk About is a dynamic vue component built to be easily dropped in to any codebase. Commenting made easy!",
          technologys: [
            {
              name: "Vue",
              color: "#41B883",
              textColor: "#ffffff"
            },
            {
              name: "Nuxt",
              color: "#3b806f",
              textColor: "#ffffff"
            }
          ],
          images: [
            {
              url: "https://media.giphy.com/media/2sh5pgtDVi2Id0m6ZR/giphy.gif",
              active: "active"
            },
            {
              url:
                "https://image.ibb.co/nLyYp8/Screen_Shot_2018_07_12_at_1_32_34_PM.png",
              active: ""
            },
            {
              url:
                "https://image.ibb.co/eVz1bo/Screen_Shot_2018_07_12_at_1_32_24_PM.png",
              active: ""
            }
          ],
          date: "5-2-18",
          url: "http://talk-about.surge.sh/#/"
        },
        {
          title: "Broken Sticks Hockey",
          description:
            "Designed and developed the Broken Sticks Hockey website to offer a great pick-up hockey experience to the Buffalo, NY area. Implemented in Bootstrap 4 and is hosted on GitHub Pages.",
          technologys: [
            {
              name: "HTML",
              color: "#e44d26",
              textColor: "#ffffff"
            },
            {
              name: "Javascript",
              color: "#efd65c",
              textColor: "#4b4848"
            }
          ],
          images: [
            {
              url: "https://media.giphy.com/media/AFJJgSkjFyGbaDZNmj/giphy.gif",
              active: "active"
            },
            {
              url:
                "https://image.ibb.co/f3481o/Screen_Shot_2018_07_10_at_2_54_08_AM.png",
              active: ""
            }
          ],
          date: "3-08-18",
          url: "http://www.brokenstickshockey.com/"
        },
        {
          title: "Repositories",
          description:
            "Repositories is a templating content management system (CMS) that allows for rapid development of single page applications (SPA) or multiple page applications (MPA) using Bootstrap 4.",
          technologys: [
            {
              name: "Vue",
              color: "#41B883",
              textColor: "#ffffff"
            },
            {
              name: "Nuxt",
              color: "#3b806f",
              textColor: "#ffffff"
            }
          ],
          images: [
            {
              url: "https://media.giphy.com/media/39sYXbpOI9aRTYyB5M/giphy.gif",
              active: "active"
            },
            {
              url: "https://media.giphy.com/media/4QFAdgWZg5Vebf9UL8/giphy.gif",
              active: ""
            },
            {
              url: "https://media.giphy.com/media/5QYnjbwjKV9Nvgk364/giphy.gif",
              active: ""
            }
          ],
          date: "Ongoing",
          url: false
        },
      ]
    };
  }
};
</script>

<style>
p {
  font-size: 16px;
}
.homepage {
  max-width: 1140px;
  margin: auto;
}
.email {
  unicode-bidi: bidi-override;
  direction: rtl;
  text-transform: lowercase;
}
.pull-middle {
  position: absolute;
  top: 50%;
  height: 100vh;
  transform: translateY(-50%);
  width: 100%;
}
</style>
