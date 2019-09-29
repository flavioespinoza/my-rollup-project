import Create from 'views/Forms/WizardSteps/Demo'
import Actors from 'views/HeathDemo/Actors'
import Evidence from 'views/HeathDemo/Evidence/Evidence'
import ExamplesFHIR from 'views/HeathDemo/ExamplesFHIR/ExamplesFHIR'
import ImageCapture from 'views/HeathDemo/ImageCapture/ImageCapture'
import OptInto from 'views/HeathDemo/OptInto'
import RecordsMedical from 'views/HeathDemo/RecordsMedical/RecordsMedical'
import AuthUserPage from 'views/Pages/AuthUserPage'
import EmailPage from 'views/Pages/EmailPage/EmailPage'
// Health Demo Pages
import LandingPage from 'views/Pages/LandingPage'
import LoginPage from 'views/Pages/LoginPage'
import SignupPage from 'views/Pages/SignupPage'
import ClinicalTrialPage from 'views/Pages/ClinicalTrialPage/ClinicalTrialPage'

const RoutesHealthDemo = [
  {
    path: '/landing',
    name: 'Landing',
    component: LandingPage,
    icon: 'fad fa-user-astronaut',
    layout: '/admin',
  },
  {
    path: '/authorize-records-request',
    name: 'Authz Records Request',
    component: SignupPage,
    icon: 'fad fa-files-medical',
    layout: '/admin',
  },
  {
    path: '/authenticate-user',
    name: 'Auth User',
    component: AuthUserPage,
    icon: 'fad fa-shield-alt',
    layout: '/admin',
  },
  {
    path: '/actors',
    name: 'Actors',
    component: Actors,
    icon: 'fad fa-users-crown',
    layout: '/admin',
  },
  {
    path: '/evidence',
    name: 'Evidence',
    component: Evidence,
    icon: 'fad fa-address-card',
    layout: '/admin',
  },
  {
    path: '/image-capture',
    name: 'Image Capture',
    component: ImageCapture,
    icon: 'fad fa-camera-retro',
    layout: '/admin',
  },
  {
    path: '/opt-into',
    name: 'Opt Into',
    component: OptInto,
    icon: 'fad fa-shield-check',
    layout: '/admin',
  },
  {
    path: '/diagnostic-reports-fhir',
    name: 'Diagnostic Reports FHIR',
    component: RecordsMedical,
    icon: 'fad fa-notes-medical',
    layout: '/admin',
  },
  {
    path: '/example-scenario-fhir',
    name: 'Example Scenario FHIR',
    component: ExamplesFHIR,
    icon: 'fad fa-projector',
    layout: '/admin',
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    icon: 'fad fa-paint-brush',
    layout: '/admin',
  },
  {
    path: '/login-page',
    name: 'Login',
    component: LoginPage,
    icon: 'fad fa-fingerprint',
    layout: '/auth',
	},
  {
    collapse: true,
    name: 'Email Templates',
		icon: 'email',    
		state: 'formsCollapse',
    views: [
      {
        path: '/email-offer-clinical-trial',
        name: 'Offer Clinical Trial',
				component: EmailPage,
				icon: 'fad fa-envelope-open-text',
        layout: '/admin',
      },
      {
        path: '/email-show-clinical-trial',
        name: 'Show Clinical Trial',
				component: ClinicalTrialPage,
				icon: 'fad fa-eye',
        layout: '/admin',
      },
    ]
  }
]

const Routes = [
  ...RoutesHealthDemo,
  // ...RoutesScreens
]

export default Routes
