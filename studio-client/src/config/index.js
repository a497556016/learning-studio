import * as dev from "./dev.env";
import * as pro from "./pro.env";
import * as pub from "./pub.env";

export default (() => {
   if(process.env.NODE_ENV === "production") {
       return Object.assign(pub, pro);
   }
   else {
       return Object.assign(pub, dev);
   }
})();