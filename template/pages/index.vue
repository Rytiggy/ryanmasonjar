<template>
<main role="main">
  <section class="container">
    <article class="jumbotron bg-white text-center" style="height:600px; margin-top: 30vh">
      <h1 class="jumbotron-heading mb-0 pb-0">Ryan Mason</h1>
      <div>
        <small class="badge badge-primary mb-2 text-white" style="unicode-bidi: bidi-override; direction: rtl;">moc.liamg@rajnosamnayr</small>
      </div>
      <p class="lead text-muted px-5 mx-5">
        Graduated from Rochester Institute of Technology with a Bachelor of Science in Information Technology. While there, grew to love web design and development. Skilled in programming, documenting, testing, and bug fixing to produce clean and commented code. Proficient with a wide variety of web development frameworks. Proven track record of success with remote work.  Always expanding knowledge of user experience and interface design.
      </p>
      <p class="lead">
        <h2 class="text-muted">
          <a href="https://www.linkedin.com/in/ryanmichaelmason/" target="_blank"><i class="fab fa-linkedin-in m-2" style="color:#0077b5"></i></a>
          <a href="https://github.com/Rytiggy/" target="_blank"><i class="fab fa-github m-2 text-dark"></i></a>   
          <a href="https://twitter.com/ryanmasonjar" target="_blank"><i class="fab fa-twitter m-2" style="color:#1da1f2"></i></a>
        </h2>
        <!-- <a href="/images/myw3schoolsimage.jpg" download>Download Resume</a> -->
      </p>
    </article>
    <h2 class="text-center">Projects</h2>
    <hr class="mb-3">
    <article class="row py-5">
      <div class=" col-lg-4 col-md-6 col-sm-12" v-for="(proj, index) in projects" :key="index">
        <project :project="proj" :index="index" />
      </div>
    </article>
    
    <h2 class="text-center">Work Experience</h2>
    <hr>
    <article class="row py-5 container">
      <div class="py-2 d-inline" v-for="(comapny, index) in timeline" :id="`timeline${index}`" :key="index">
        <h4 class="mb-0">{{comapny.title}}</h4>
        <!-- <div class="lead text-muted"> {{comapny.date}}</div> -->
        <a :href="tag.url" target="_blank" class="badge badge-primary mb-1" v-for="(tag, i) in comapny.tags" :style="`background:${tag.color}`" :key="i">{{tag.name}}</a>
        <!-- <p class="lead text-muted" v-html="comapny.description"></p> -->
        <div class="py-2 d-inline" v-for="(position, key) in comapny.roles" :id="`timeline${key}`" :key="key">
          <h5 class="mb-0 text-muted">{{position.title}}</h5>
          <div class="text-muted"> {{position.date}}</div>
          <!-- <a :href="company.url" target="_blank" class="badge badge-primary mb-1" v-for="(company, i) in event.compaies" :style="`background:${company.color}`" :key="i">{{company.name}}</a> -->
          <p class="lead text-muted" v-html="position.description"></p>
        </div>
      </div>   
    </article>
    
    <h2 class="text-center">Education</h2>
    <hr>
    <article class="row py-5 container">
      <div class="py-2 d-inline" v-for="(event, index) in education" :id="`timeline${index}`" :key="index">
        <h4 class="mb-0">{{event.title}}</h4>
        <div class="text-muted"> {{event.date}}</div>
        <a :href="tag.url" target="_blank" class="badge badge-primary mb-1" v-for="(tag, i) in event.tags" :style="`background:${tag.color}`" :key="i">{{tag.name}}</a>
        <p class="lead text-muted" v-html="event.description"></p>
      </div>
    </article>
    <!-- <h2 class="text-center">Testimonials</h2>
    <hr>
    <article class="row py-5 justify-content-center">
      <div class="col-lg-4 col-md-6 col-sm-12" v-for="(testimonial, index) in testimonials" :key="index">
        <div class="card m-1">
          <div class="card-body">
            <h5 class="card-title m-0 mb-1">{{testimonial.name}}</h5>
            <p class="card-text mb-1"><i>{{testimonial.quote}}</i></p>
            <span target="_blank" class="badge badge-primary" :style="`background:${context.color}`" v-for="(context, i) in testimonial.context" :key="i">{{context.title}}</span>
          </div>
        </div>
      </div>
    </article> -->
    <article class="row py-5">
      <!-- <p class="lead text-muted">
        Skills with programming, documenting, testing, and bug fixing to produce the cleanest code. proficient with a wide variety of web development frameworks. UX UI
      </p>
      <p>
        <a href="#" class="btn btn-primary m-2">Main call to action</a>
        <a href="#" class="btn btn-secondary m-2">Secondary action</a>
      </p> -->
    </article>
  </section>

</main>
</template>

<script>
import project from '~/components/project.vue';


export default {
  components: {
    project
  },
  data() {
    return {
      testimonials: [
        {
          name: 'Janet Wilson',
          quote: 'Yes it worked. Thank you so much for creating this and for you help.',
          context: [
            {
              title: 'Glance',
              color: '#390263',
            },
          ]
        },
        {
          name: 'Kyle Tedesco',
          quote: `Thanks for all your help with this, you've been a lifesaver.`,
          context: [
            {
              title: 'Broken Sticks Hockey',
              color: '#102246',
            },
          ]
        },
      ],
      timeline: [
         {
          title: '221b',
          date: '2018 - Present',
          tags: [
            {
              name: '221b',
              color: '#0d305a',
              url: 'http://221b-dev.surge.sh/',
            }
          ],
          roles: [
            {
              title: 'Software Developer',
              description: `Provides application development and consulting services to clients including Johns Hopkins University, Notre Dame, and Databrary to develop products from concept to delivery while expressing complex ideas clearly and succinctly. Specializes in rapid incremental prototyping and delivering beautifully written software to our clients. Focuses on using universally agreed upon best practices and utilizing constant user-testing along the way to continually deliver high quality products. Working with frameworks such as Ember.js, Vue.js, and Nuxt.js. Proficient with Node.js to build web scrapers with puppeteer (headless Chrome node API). Presented “Decentralizing SHARE & Research” at the <a href="https://cnifall2018membershipmeeting.sched.com/event/IOXb" target="_blank">Coalition for Networked Information Membership Conference</a> (CNI).`,
              date: 'Feb 2018 - Current',
            },
          ]
        },
        {
          title: 'The Center for Open Science',
          date: '2016 - 2018',
          tags: [
            {
              name: 'COS',
              color: '#34BAEC',
              url: 'https://cos.io/',
            }
          ],
          roles: [
            {
              title: 'Junior Software Developer',
              description: `Worked on the Labs team using rapid incremental prototyping to create experimental products, such as Public Access Submission System and Open Science Framework Pages.  Developed proficiency in Ember.js while interfacing with a variety of databases including Firebase and Django.`,
              date: 'Jun 2017 - Jan 2018',
            },
            {
              title: 'Developer Intern',
              description: `Developed web applications following software design principles, collaborating with teams of developers, working with Ember.js and Django REST API frameworks.`,
              date: 'May 2016 - Jun 2017',
            },
          ]
        },
        {
          title: 'RIT - Information & Technology Services',
          date: '2015 - 2016',
          tags: [
            {
              name: 'RIT ITS',
              color: '#f06d30',
              url: 'https://www.rit.edu/its/',
            }
          ],
          roles: [
            {
              title: 'Lab Technician',
              description: `Worked at the <i>College of Imaging Arts and Sciences</i> providing technical support to students, maintaining, fixing, upgrading computers, and providing end user support for computer labs on the Rochester Institute of Technology campus.`,
              date: 'Jan 2016 - May 2016',
            },
            {
              title: 'Assistant System Administrator',
              description: `Worked at the <i>College of Science</i> providing technical support for faculty and staff at Rochester Institute of Technology. Performed backup, restore, upgrades, and software installations for Mac and Windows computers.`,
              date: 'Apr 2015 - Jan 2016',
            }
          ]
        }
      ],
      education : [
        {
          title: 'Rochester Institute Of Technology',
          description: `Received a Bachelor's degree from Rochester Institute of Technology in Information Technology with an immersion in Web and Mobile Design and a concentration in Communications.`,
          date: 'Aug 2013 - May 2017',
          tags: [
            {
              name: 'RIT',
              color: '#b56422',
              url: 'http://www.rit.edu/',
            }
          ],
        }
      ],
      projects: [
        {
          title: 'Glance',
          description: 'Glance is a application for use with Fitbit devices to view your blood glucose levels along with a variety of other health stats on the watch face. You can see your stats at a glance!',
          technologys: [
            {
              name: 'Fitbit SDK',
              color: '#00B0B9'
            }, 
            {
              name: 'Javascript',
              color: '#efd65c'
            } 
          ],
          images: [{
            url: 'https://image.ibb.co/fbiG9U/versa-Ionic.png',
            active: 'active',
          }, ],
          date: 'Ongoing',
          url: 'https://github.com/Rytiggy/Glance',
        },
        {
          title: 'Repositories',
          description: 'Repositories is a templating content management system (CMS) that allows for rapid development of single page applications (SPA) or multiple page applications (MPA) using Bootstrap 4.',
          technologys: [
            {
              name: 'Vue',
              color: '#41B883'
            },
            {
              name: 'Nuxt',
              color: '#3b806f'
            },
          ],
          images: [
            {
              url: 'https://media.giphy.com/media/39sYXbpOI9aRTYyB5M/giphy.gif',
              active: 'active',
            }, 
            {
              url: 'https://media.giphy.com/media/4QFAdgWZg5Vebf9UL8/giphy.gif',
              active: ''
            },
            {
              url: 'https://media.giphy.com/media/5QYnjbwjKV9Nvgk364/giphy.gif',
              active: ''
            }
          ],
          date: 'Ongoing',
          url: false,
        },
        {
          title: 'Talk About',
          description: 'Talk About is a dynamic vue component built to be easily dropped in to any codebase. Commenting made easy!',
          technologys: [
            {
              name: 'Vue',
              color: '#41B883'
            },
            {
              name: 'Nuxt',
              color: '#3b806f'
            },
          ],
          images: [
            {
              url: 'https://media.giphy.com/media/2sh5pgtDVi2Id0m6ZR/giphy.gif',
              active: 'active',
            },
            {
              url: 'https://image.ibb.co/nLyYp8/Screen_Shot_2018_07_12_at_1_32_34_PM.png',
              active: '',
            },
            {
              url: 'https://image.ibb.co/eVz1bo/Screen_Shot_2018_07_12_at_1_32_24_PM.png',
              active: '',
            },
         ],
          date: '5-2-18',
          url: 'http://talk-about.surge.sh/#/',
        },
        {
          title: 'Public Access Submission System',
          description: 'The Public Access Submission System (PASS) is a platform built to assist researchers in complying with the access policies of their funders and institutions.',
          technologys: [{
              name: 'Ember',
              color: '#E04E39'
            },
            {
              name: 'Fedora',
              color: '#c7353c'
            },
          ],
          images: [{
              url: 'https://image.ibb.co/efq6Mo/pass_ui.png',
              active: 'active',
            },
            {
              url: 'https://image.ibb.co/emdqE8/image1.png',
              active: '',
            },
          ],
          date: '6-30-18',
          url: 'https://pass.jhu.edu/',
        },
        {
          title: 'Broken Sticks Hockey',
          description: 'Designed and developed the Broken Sticks Hockey website to offer a great pick-up hockey experience to the Buffalo, NY area. Implemented in Bootstrap 4 and is hosted on GitHub Pages.',
          technologys: [
            {
              name: 'HTML',
              color: '#e44d26'
            }, 
            {
              name: 'Javascript',
              color: '#efd65c'
            } 
          ],
          images: [{
              url: 'https://media.giphy.com/media/AFJJgSkjFyGbaDZNmj/giphy.gif',
              active: 'active',
            },
            {
              url: 'https://image.ibb.co/f3481o/Screen_Shot_2018_07_10_at_2_54_08_AM.png',
              active: '',
            }
          ],
          date: '3-08-18',
          url: 'http://www.brokenstickshockey.com/',
        },
        {
          title: 'OSF Pages',
          description: 'OSF Pages is an Open Science Framework (OSF) add-on and website builder that helps OSF users build beautiful websites very quickly using their existing project details.',
          technologys: [
          {
            name: 'Ember',
            color: '#E04E39'
          },
          {
            name: 'Django',
            color: '#152c1f'
          }
        ],
          images: [{
              url: 'https://media.giphy.com/media/5vUz649RO6dKqCuo0k/giphy.gif',
              active: 'active',
            },
            {
              url: 'https://media.giphy.com/media/QMKntqhT23aV2KjGtO/giphy.gif',
              active: '',
            },
            {
              url: 'https://media.giphy.com/media/7NISJvZeh48MeNvTNe/giphy.gif',
              active: '',
            }
          ],
          date: '2-01-18',
          url: 'https://github.com/cos-labs/osfpages',
        },
      ]
    };
  },
}
</script>

<style>
.person {
  width: 100px;
  height: 100px;
}
 
p {
  font-size: 16px!important;
}
</style>
