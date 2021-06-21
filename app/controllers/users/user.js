import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersUserController extends Controller {
 @action
    async ChangeArchived()
  {
    const archive = document.querySelector(".button--archive");

   if(this.model.value==true)
    {
      var text= confirm("Are you sure you want to unarchive user?");
     
      if(text==true)
      {
       archive.innerHTML= "Archive";
       this.model.changeValue();
       
      }
  }
   else
   {
      
    var text= confirm("Are you sure you want to archive user?");
       if(text==true)
       {
       archive.innerHTML= "Unarchive";
       this.model.changeValue();
      }
    }
  }
}
