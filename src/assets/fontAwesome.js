import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserAlt,
  faSignInAlt,
  faSignOutAlt,
  faPaw,
  faSpinner,
  faCheck,
  faTimes,
  faThLarge,
  faChartBar,
  faPlus,
  faBars,
  faFileUpload,
  faEye,
  faDog,
} from "@fortawesome/free-solid-svg-icons";

const fontAwesome = () => {
  library.add(
    faUserAlt,
    faSignInAlt,
    faSignOutAlt,
    faPaw,
    faSpinner,
    faCheck,
    faTimes,
    faThLarge,
    faChartBar,
    faPlus,
    faBars,
    faFileUpload,
    faEye,
    faDog
  );
};

export default fontAwesome;
