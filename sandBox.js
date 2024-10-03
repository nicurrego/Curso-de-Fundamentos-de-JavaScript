// una manera de administrar las tareas para no sobrecargar la memoria es utilizando una web API

//la cual se encarga de realizar las tareas por separado, mandar el resultado al queue y de ahi se le permite el reingreso al Call stack una vez este tenga disponibilidad de recursos.


call stack      web API
+++++++++    +++++++++++++++++++
+       +    +                 +
+       +    +                 +
+       +    +     timer       +
+       +    +                 +
+       +    + /* function()*/ +
+       +    +                 +
+++++++++    +++++++++++++++++++

                     queue
   loop   <- +++++++++++++++++++++
             +++++++++++++++++++++