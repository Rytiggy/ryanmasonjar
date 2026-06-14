<template>
  <q-page padding class="homepage">
    <!-- About Me -->
    <section class="text-center q-my-xl q-py-xl">
      <div>
        <q-avatar size="150px">
          <img src="../statics/ryanmason.jpeg" />
        </q-avatar>
        <div class="text-h3 text-weight-bold text-blue-grey-9">Ryan Mason</div>
        <q-chip class="q-mb-md">
          <q-avatar icon="email" color="blue" text-color="white" />
          <span class="email text-blue-grey-9">ryanmasonjar@gmail.com</span>
        </q-chip>

        <p class="about-me text-weight-light text-blue-grey-9">
          Principal software engineer with a deep passion for building applications that solve real problems for real
          people. Deep expertise across web, iOS, and Android, with a proven track record of taking products from
          concept to delivery, including multiple apps shipped to the App Store and Google Play. Brings experience
          designing interfaces that help people understand and manage complex information. Works independently,
          collaborates well remotely, mentors other engineers, and is always pushing to learn what's next.
        </p>
        <a href="https://www.linkedin.com/in/ryanmasonjar/" target="_blank">
          <i class="fab fa-linkedin-in text-h4 q-px-sm" style="color:#0077b5"></i>
        </a>
        <a href="https://github.com/Rytiggy/" target="_blank">
          <i class="fab fa-github text-h4 q-px-sm" style="color:#212529"></i>
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
          title: "ABB",
          date: "July 2019 - Present",
          logo: new URL('../statics/abb.svg', import.meta.url).href,
          url: "https://abb.com",
          roles: [
            {
              title: "Principal Software Engineer",
              description: `<ul><li>Joined ABB following the acquisition of Lumin, bringing deep product knowledge and continuing development of the platform across web, iOS, and Android using Vue, TypeScript, and Capacitor, serving thousands of users across more than 5,000 smart panels.</li><li>Extended "Building Blocks" to support brandable, reusable UI components, enabling white labeling across multiple products and partners and directly expanding the commercial reach of the platform.</li><li>Engineered support for a new generation of hardware within the existing Vue and Capacitor codebase, including a new commissioning flow and version validation logic, reflecting a consistent ability to bridge mobile software and connected hardware challenges.</li><li>Maintained compliance with evolving iOS and Android platform policies, adapting the application to meet new App Store and Google Play requirements as they were enforced.</li><li>Led technical direction for a growing frontend team, driving code standards, architecture decisions, and hands-on mentorship through code reviews and day-to-day guidance.</li><li>Regularly use GitHub Copilot and Claude as part of daily development workflow, from PR reviews and debugging to understanding complex problems and shipping cleaner code faster.</li></ul>`,
              date: "Jan 2025 - Present"
            },

          ]
        },
        {
          title: "Lumin",
          date: "July 2019 - Present",
          logo: new URL('../statics/lumin.png', import.meta.url).href,
          url: "https://www.luminsmart.com/",
          roles: [
            {
              title: "Senior Software Engineer",
              description: `<ul><li>Led development of Lumin's next-generation iOS and Android application using Vue.js, Capacitor, and TypeScript, designing and building multi-step guided workflows that delivered a streamlined experience for installers and homeowners alike.</li><li>Implemented secure local network communication over HTTPS with TLS, including low-level iOS and Android certificate validation.</li><li>Created "Building Blocks," a Vue component library published as an npm module and widely adopted across the organization, standardizing UI across all applications and accelerating new project setup.</li><li>Led and mentored Lumin's intern program, guiding interns in building an internal support portal for the customer service team.</li><li>Built and maintained an Appium-based automated testing suite running nightly on-device regression tests across iOS and Android, ensuring application stability across releases.</li></ul > `,
              date: "Oct 2021 - Jan 2025"
            },
            {
              title: "UI/UX Engineer",
              description: `<ul><li>Hired as Lumin's first dedicated frontend engineer, solely responsible for designing and building the company's first mobile application from the ground up using Vue.js and Cordova.</li><li>Built the end-to-end commissioning experience that takes a Lumin Smart Panel from out of the box to fully connected on the home network, including mDNS device discovery.</li><li>Played a key role in scaling the engineering team following launch, contributing to interviewing, hiring decisions, and onboarding of new frontend team members.</li></ul > `,
              date: "July 2019 - Oct 2021"
            }
          ]
        },
        {
          title: "Projector",
          date: "Jan 2020 - Present",
          logo: new URL('../statics/projector.png', import.meta.url).href,
          url: "https://projectorsoft.com/",
          roles: [
            {
              title: "Senior Software Engineer",
              description: `Responsible for the frontend development of the Projector web extension.`,
              date: "Jan 2020 - Present"
            }
          ]
        },
        {
          title: "221b",
          date: "2018 - 2019",
          logo: new URL('../statics/221b.png', import.meta.url).href,
          url: "http://221b-dev.surge.sh/",
          roles: [
            {
              title: "Software Developer",
              description: `<ul><li>Provided application development and consulting services to clients of all sizes, taking products from concept to delivery using agile methodology and industry best practices.</li><li>Presented "Decentralizing SHARE & Research" at the Coalition for Networked Information (CNI) Membership Conference.</li></ul> `,
              date: "Feb 2018 - July 2019"
            }
          ]
        },
        {
          title: "The Center for Open Science",
          date: "2016 - 2018",
          logo: new URL('../statics/cos.png', import.meta.url).href,
          url: "https://cos.io/",
          roles: [
            {
              title: "Junior Software Developer",
              description: `<ul> <li>Built open science web applications using Ember.js, interfacing with Firebase and Django backends as part of a rapid prototyping team.</li></ul > `,
              date: "Jun 2017 - Jan 2018"
            },
            {
              title: "Developer Intern",
              description: `<ul> <li>Interned on the development team building web applications with Ember.js and Django REST APIs.</li></ul > `,
              date: "May 2016 - Jun 2017"
            }
          ]
        },
        {
          title: "RIT - Information & Technology Services",
          date: "2015 - 2016",
          logo: new URL('../statics/rit-its.png', import.meta.url).href,
          url: "https://www.rit.edu/its/",
          roles: [
            {
              title: "Lab Technician",
              description: `<ul> <li>Provided technical support and computer maintenance for RIT's College of Imaging Arts and Sciences labs.</li></ul > `,
              date: "Jan 2016 - May 2016"
            },
            {
              title: "Assistant System Administrator",
              description: `<ul> <li>Provided technical support and performed system maintenance, backups, and software installations for faculty and staff at RIT's College of Science.</li></ul > `,
              date: "Apr 2015 - Jan 2016"
            }
          ]
        }
      ],
      education: [
        {
          title: "Rochester Institute Of Technology",
          date: "Aug 2013 - May 2017",
          logo: new URL('../statics/rit.png', import.meta.url).href,
          url: "http://www.rit.edu/",
          roles: [
            {
              title: "B.S. Information Technology",
              description: `<ul> <li>Received a Bachelor's degree from Rochester Institute of Technology in Information Technology with an immersion in Web and Mobile Design and a concentration in Communications.</li></ul > `,
              date: "Aug 2013 - May 2017"
            }
          ]
        }
      ],
      projects: [

        {
          title: "Skeeball",
          description: "Fun project building a skeeball machine from scratch using a Raspberry Pi and a variety of sensors and motors.",
          technologies: [
            {
              name: "Vue",
              color: "#42b883",
              textColor: "#ffffff"
            },
            {
              name: "Rasberry Pi",
              color: "#C51A4A",
              textColor: "#ffffff"
            },
            {
              name: "Express",
              color: "#000000",
              textColor: "#ffffff"
            },
          ],
          images: [
            { url: new URL('../statics/projects/skeeball.png', import.meta.url).href },
            { url: new URL('../statics/projects/skeeball2.png', import.meta.url).href },
            { url: new URL('../statics/projects/skeeball3.png', import.meta.url).href },

          ],
          date: "5-01-2021",
          url: "https://github.com/Rytiggy/skeeball"
        },
        {
          title: "ReliaHomes",
          description: "A specialized version of the Lumin Energy app built for ABB's ReliaHome product.",
          technologies: [
            {
              name: "Vue",
              color: "#42b883",
              textColor: "#ffffff"
            },
            {
              name: "Capacitor",
              color: "#078fd0",
              textColor: "#ffffff"
            },

          ],
          images: [
            { url: new URL('../statics/projects/reliahome.png', import.meta.url).href },
          ],
          date: "5-01-2021",
          url: "https://reliahome.abb.com"
        },
        {
          title: "Lumin Energy",
          description: "A complete UI overhaul of the Lumin energy management application, built with Vue and Capacitor. Designed to support multiple generations of hardware.",
          technologies: [
            {
              name: "Vue",
              color: "#42b883",
              textColor: "#ffffff"
            },
            {
              name: "Capacitor",
              color: "#078fd0",
              textColor: "#ffffff"
            }
          ],
          images: [
            { url: new URL('../statics/projects/luminenergy.png', import.meta.url).href },

          ],
          date: "5-01-2021",
          url: "https://lumin.energy"
        },
        {
          title: "Lumin Dashboard",
          description:
            "Rebuilt and redesigned the Lumin energy management dashboard allowing users to control their homes circuits from a web portal or natively on IOS or Android apps.",
          technologies: [
            {
              name: "Vue",
              color: "#42b883",
              textColor: "#ffffff"
            },
            {
              name: "Quasar",
              color: "#027be3",
              textColor: "#ffffff"
            },
            {
              name: "Cordova",
              color: "#4dc2e4",
              textColor: "#000000"
            }
          ],
          images: [
            { url: new URL('../statics/projects/lumin01.png', import.meta.url).href },
            { url: new URL('../statics/projects/lumin03.png', import.meta.url).href },
            { url: new URL('../statics/projects/lumin05.png', import.meta.url).href },
            { url: new URL('../statics/projects/lumin02.png', import.meta.url).href },
            { url: new URL('../statics/projects/lumin04.png', import.meta.url).href }
          ],
          date: "5-01-19",
          url: "https://app.luminsmart.com/"
        },
        {
          title: "Glance",
          description:
            "Glance is a application for use with Fitbit devices to view your blood glucose levels along with a variety of other health stats on the watch face. You can see your stats at a glance!",
          technologies: [
            {
              name: "Fitbit SDK",
              color: "#00B0B9",
              textColor: "#ffffff"
            },

            {
              name: "React",
              color: "#61DBFB",
              textColor: "#000000"
            }
          ],
          images: [
            { url: new URL('../statics/projects/glance01.png', import.meta.url).href },
            { url: new URL('../statics/projects/header.jpg', import.meta.url).href },
            { url: new URL('../statics/projects/gallery11.jpg', import.meta.url).href }
          ],
          date: "Ongoing",
          url: "https://glancewatchface.com/"
        },
        {
          title: "Public Access Submission System",
          description:
            "The Public Access Submission System is a platform to assist researchers in complying with the policies of their funders and institutions.",
          technologies: [
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
            { url: new URL('../statics/projects/pass_ui.png', import.meta.url).href, active: 'active' },
            { url: new URL('../statics/projects/image1.png', import.meta.url).href, active: '' }
          ],
          date: "6-30-18",
          url: "https://pass.jhu.edu/"
        },
        {
          title: "Broken Sticks Hockey",
          description:
            "Designed and developed the Broken Sticks Hockey website to offer a great pick-up hockey experience to the Buffalo, NY area. Implemented in Bootstrap 4 and is hosted on GitHub Pages.",
          technologies: [
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
          images: [{ url: new URL('../statics/projects/bsh.png', import.meta.url).href }],
          date: "3-08-18",
          url: "http://www.brokenstickshockey.com/"
        },
        {
          title: "OSF Pages",
          description:
            "OSF Pages is an Open Science Framework (OSF) add-on and website builder that helps OSF users build beautiful websites very quickly using their existing project details.",
          technologies: [
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
            { url: new URL('../statics/projects/osfPages01.gif', import.meta.url).href },
            { url: new URL('../statics/projects/osfPages02.png', import.meta.url).href }
          ],
          date: "2-01-18",
          url: "https://github.com/cos-labs/osfpages"
        },
        {
          title: "AdMail",
          description:
            "Redesigned select pages for our client in an effort to modernize their website. Designed wireframes and focused on material design. Updated major version of Ember (v2.8 -> v3.10).",
          technologies: [
            {
              name: "Ember",
              color: "#E04E39",
              textColor: "#ffffff"
            }
          ],
          images: [
            { url: new URL('../statics/projects/smartgroups.png', import.meta.url).href },
            { url: new URL('../statics/projects/groupMovement.png', import.meta.url).href },
            { url: new URL('../statics/projects/namingSmartgroup.png', import.meta.url).href },
            { url: new URL('../statics/projects/AccuTrak.png', import.meta.url).href }
          ],
          date: "5-2-19",
          url: ""
        },
        {
          title: "Hotel Finder",
          description:
            "Find and locate hotels with a simple click of a button. Clean UI focused on material design built on Leaflet.js. Sharable URL's for easy sharing of hotles you find!",
          technologies: [
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
            { url: new URL('../statics/projects/hotelFinder01.png', import.meta.url).href },
            { url: new URL('../statics/projects/hotelFinder02.png', import.meta.url).href }
          ],
          date: "6-30-18",
          url: "http://hotelfinder.surge.sh/#/"
        },
        {
          title: "Talk About",
          description:
            "Talk About is a dynamic vue component built to be easily dropped in to any codebase. Commenting made easy!",
          technologies: [
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
            { url: new URL('../statics/projects/talkabout02.png', import.meta.url).href },
            { url: new URL('../statics/projects/talkabout.png', import.meta.url).href }
          ],
          date: "5-2-18",
          url: "http://talk-about.surge.sh/#/"
        }
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
  /* unicode-bidi: bidi-override;
  direction: rtl; */
  text-transform: lowercase;
}

.pull-middle {
  position: absolute;
  top: 50%;
  height: 100vh;
  transform: translateY(-50%);
  width: 100%;
}

ul {
  margin: 0;
  padding: 0em;
  padding-left: 2em;
}
</style>
