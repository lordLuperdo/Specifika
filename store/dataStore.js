import { defineStore } from "pinia";

export const UseDataStore = defineStore('DataStore', ()=>{

    const owners = [
        {
            name:"carmen Olivia",
            function:"Administradora",
            description:"",
            number: 3022600280,
            photo:"",

        },
        {
            name:"Marco Antonio",
            function:"Representante",
            description:"",
            number: 3143131314,
            photo:"",

        },
        {
            name:"Oscar Delgado",
            function:"Esterilización Senior",
            description:"",
            number: 3143131314,
            photo:"",

        },

        
    ]

    const products = [
        {
            id:"102",
            name:"Autoclave de Laboratorio 450Lt",
            photo:"https://njieckyjgjbesczkehla.supabase.co/storage/v1/object/public/Productos/102.png",
            description:"Cámara de 450 litros Autoclave de Laboratorio 66120 Autoclave de vapor de laboratorio Fiable y fácil de usar, la máquina autoclave 66120 esteriliza diversos tipos de cargas de laboratorio con programas de ciclo que varían en temperatura de 105°C a 138°C, y una presión de trabajo que cumple con los requisitos de AMSE y PED. El autoclave 66120 está disponible con puertas deslizantes verticales simples o dobles.",
            points:[
                "El diseño estrecho permite instalar este modelo en un espacio pequeño manteniendo una gran capacidad de carga",
                "El uso de agua refrigerada del edificio puede reducir el consumo hasta en un 90%, haciendo que sus instalaciones sean más ecológicas y económicas",
                "La gran pantalla táctil a color le ofrece una visión general fácil de leer de los valores de la cámara en tiempo real, así como gráficos de tendencias de temperatura y presión.",
                "Transfiera datos de ciclo y códigos de barras asociados a una PC usando software de monitoreo remoto opcional y escáner de código de barras"
            ],
            category:"medico",
            key_Words:[
                "autoclave","esterilizador","litros","450"
            ],
            link:""
               
        },
         {
            id:"101",
            name:"Autoclave de Laboratorio 250Lt",
            photo:"https://njieckyjgjbesczkehla.supabase.co/storage/v1/object/public/Productos/101.png",
            description:"Cámara de 250 litros Autoclave de Laboratorio 5596 Autoclave de vapor de laboratorio Fiable y fácil de usar, la máquina autoclave 5596 esteriliza diversos tipos de cargas de laboratorio con programas de ciclo que varían en temperatura de 105°C a 138°C, y una presión de trabajo que cumple con los requisitos de AMSE y PED. El autoclave 5596 está disponible con una configuración de una o dos puertas, puertas deslizantes de bloqueo automático o puertas con bisagras.",
            points:[
                "El diseño estrecho permite instalar este modelo en un espacio pequeño manteniendo una gran capacidad de carga",
                "El uso de agua refrigerada del edificio puede reducir el consumo hasta en un 90%, haciendo que sus instalaciones sean más ecológicas y económicas",
                "La gran pantalla táctil a color le ofrece una visión general fácil de leer de los valores de la cámara en tiempo real, así como gráficos de tendencias de temperatura y presión.",
                "Transfiera datos de ciclo y códigos de barras asociados a una PC usando software de monitoreo remoto opcional y escáner de código de barras"
            ],
            category:"dental",
            key_Words:[
                "autoclave","esterilizador","litros","250"
            ],
            link:""
        },
        {
            id:"103",
            name:"Autoclave de Laboratorio 610Lt",
            photo:"https://njieckyjgjbesczkehla.supabase.co/storage/v1/object/public/Productos/103.png",
            description:"Cámara de 610 litros Autoclave de Laboratorio 6671130 Autoclave de vapor de laboratorio Fiable y fácil de usar, la máquina autoclave 6671130 esteriliza diversos tipos de cargas de laboratorio con programas de ciclo que varían en temperatura de 105°C a 138°C, y una presión de trabajo que cumple con los requisitos de AMSE y PED. El autoclave 6671130 está disponible con dos puertas deslizantes verticales.",
            points:[
                "El diseño estrecho permite instalar este modelo en un espacio pequeño manteniendo una gran capacidad de carga",
                "El uso de agua refrigerada del edificio puede reducir el consumo hasta en un 90%, haciendo que sus instalaciones sean más ecológicas y económicas",
                "La gran pantalla táctil a color le ofrece una visión general fácil de leer de los valores de la cámara en tiempo real, así como gráficos de tendencias de temperatura y presión.",
                "Transfiera datos de ciclo y códigos de barras asociados a una PC usando software de monitoreo remoto opcional y escáner de código de barras"
            ],
            category:"medico",
            key_Words:[
                "autoclave","esterilizador","litros","610"
            ],
            link:""
        },
        {
            id:"104",
            name:"Autoclave de Laboratorio 450Lt",
            photo:"https://njieckyjgjbesczkehla.supabase.co/storage/v1/object/public/Productos/102.png",
            description:"Cámara de 450 litros Autoclave de Laboratorio 66120 Autoclave de vapor de laboratorio Fiable y fácil de usar, la máquina autoclave 66120 esteriliza diversos tipos de cargas de laboratorio con programas de ciclo que varían en temperatura de 105°C a 138°C, y una presión de trabajo que cumple con los requisitos de AMSE y PED. El autoclave 66120 está disponible con puertas deslizantes verticales simples o dobles.",
            points:[
                "El diseño estrecho permite instalar este modelo en un espacio pequeño manteniendo una gran capacidad de carga",
                "El uso de agua refrigerada del edificio puede reducir el consumo hasta en un 90%, haciendo que sus instalaciones sean más ecológicas y económicas",
                "La gran pantalla táctil a color le ofrece una visión general fácil de leer de los valores de la cámara en tiempo real, así como gráficos de tendencias de temperatura y presión.",
                "Transfiera datos de ciclo y códigos de barras asociados a una PC usando software de monitoreo remoto opcional y escáner de código de barras"
            ],
            category:"dental",
            key_Words:[
                "autoclave","esterilizador","litros","450"
            ],
            link:""
               
        },
         {
            id:"105",
            name:"Autoclave de Laboratorio 250Lt",
            photo:"https://njieckyjgjbesczkehla.supabase.co/storage/v1/object/public/Productos/101.png",
            description:"Cámara de 250 litros Autoclave de Laboratorio 5596 Autoclave de vapor de laboratorio Fiable y fácil de usar, la máquina autoclave 5596 esteriliza diversos tipos de cargas de laboratorio con programas de ciclo que varían en temperatura de 105°C a 138°C, y una presión de trabajo que cumple con los requisitos de AMSE y PED. El autoclave 5596 está disponible con una configuración de una o dos puertas, puertas deslizantes de bloqueo automático o puertas con bisagras.",
            points:[
                "El diseño estrecho permite instalar este modelo en un espacio pequeño manteniendo una gran capacidad de carga",
                "El uso de agua refrigerada del edificio puede reducir el consumo hasta en un 90%, haciendo que sus instalaciones sean más ecológicas y económicas",
                "La gran pantalla táctil a color le ofrece una visión general fácil de leer de los valores de la cámara en tiempo real, así como gráficos de tendencias de temperatura y presión.",
                "Transfiera datos de ciclo y códigos de barras asociados a una PC usando software de monitoreo remoto opcional y escáner de código de barras"
            ],
            category:"dental",
            key_Words:[
                "autoclave","esterilizador","litros","250"
            ],
            link:""
        },
        {
            id:"106",
            name:"Autoclave de Laboratorio 610Lt",
            photo:"https://njieckyjgjbesczkehla.supabase.co/storage/v1/object/public/Productos/103.png",
            description:"Cámara de 610 litros Autoclave de Laboratorio 6671130 Autoclave de vapor de laboratorio Fiable y fácil de usar, la máquina autoclave 6671130 esteriliza diversos tipos de cargas de laboratorio con programas de ciclo que varían en temperatura de 105°C a 138°C, y una presión de trabajo que cumple con los requisitos de AMSE y PED. El autoclave 6671130 está disponible con dos puertas deslizantes verticales.",
            points:[
                "El diseño estrecho permite instalar este modelo en un espacio pequeño manteniendo una gran capacidad de carga",
                "El uso de agua refrigerada del edificio puede reducir el consumo hasta en un 90%, haciendo que sus instalaciones sean más ecológicas y económicas",
                "La gran pantalla táctil a color le ofrece una visión general fácil de leer de los valores de la cámara en tiempo real, así como gráficos de tendencias de temperatura y presión.",
                "Transfiera datos de ciclo y códigos de barras asociados a una PC usando software de monitoreo remoto opcional y escáner de código de barras"
            ],
            category:"dental",
            key_Words:[
                "autoclave","esterilizador","litros","610"
            ],
            link:""
        },
        
    ]

    const services = 
        {
            mantenimiento:[
                {
                name:"Preventivo",
                description:
                   "Mantenga sus equipos al día y en excelente estado, ofrecemos el servicio de mantenimiento preventivo y correctivo de autoclaves.",
            points:[
                "Limpieza integral externa e interna del equipo.",
                "Revisión y limpieza sistema electrónico. (Revisión de la tarjeta electrónica, terminales, conectores, teclado, display).",
                "Revisión del sistema eléctrico. (Resistencias de calentamiento, cable de potencia, fusibles)",
                "Revisión y limpieza de válvula de seguridad, válvula de descarga aire/vapor, válvula de drenaje y bombas.",
                "Revisión y limpieza del tanque, cubierta, bandeja difusora.",
                "Informe de mantenimiento, registro fotográfico del trabajo realizado."
            ],
            photos:{
                main:"fff",
                collection:{

                }
            },
                },


                {
                name:"Correctivo",
                description:
                   "Mantenga sus equipos al día y en excelente estado, ofrecemos el servicio de mantenimiento preventivo y correctivo de autoclaves.",
            points:[
               "Chequeo general.",
               "Cambio y validación de repuestos.",
               "Puesta en marcha del equipo."

            ],
            photos:{
                main:"fff",
                collection:{
                    
                }
            },
                },
                
            ],


            Soluciones_Especificas:[
                {
                    name:"Mantenimiento",
                    description:"scs",
                    photo:"",
                    points:[
                         "El diseño estrecho permite instalar este modelo en un espacio pequeño manteniendo una gran capacidad de carga",
                         "El uso de agua refrigerada del edificio puede reducir  el consumo hasta en un 90%, haciendo que sus instalaciones sean más ecológicas y económicas",
                         "La gran pantalla táctil a color le ofrece una visión general fácil de leer de los valores de la cámara en tiempo real, así como gráficos de tendencias de temperatura y presión.",
                         "Transfiera datos de ciclo y códigos de barras asociados a una PC usando software de monitoreo remoto opcional y escáner de código de barras"
                    ]

                },

                {
                    name:"Eliminación de basuras",
                    description:"scs",
                    photo:"",
                    points:[
                         "El diseño estrecho permite instalar este modelo en un espacio pequeño manteniendo una gran capacidad de carga",
                         "El uso de agua refrigerada del edificio puede reducir  el consumo hasta en un 90%, haciendo que sus instalaciones sean más ecológicas y económicas",
                         "La gran pantalla táctil a color le ofrece una visión general fácil de leer de los valores de la cámara en tiempo real, así como gráficos de tendencias de temperatura y presión.",
                         "Transfiera datos de ciclo y códigos de barras asociados a una PC usando software de monitoreo remoto opcional y escáner de código de barras"
                    ]

                }

            ]

        }
    

    const Partners = [
      {name:"Tc Salys",
       photo:"",
       link:""
      },
      {name:"b",
       photo:"",
       link:""
      },
    ]

    return {owners,products,services,Partners}

})
