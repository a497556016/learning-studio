import dev from "./dev.env";
import pro from "./pro.env";

export default (() => {
   if(process.env.NODE_ENV === "production") {
       return pro;
   }
   else {
       return dev;
   }
});