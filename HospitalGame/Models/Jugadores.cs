using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HospitalGame.Models
{
    public class Jugadores
    {
        public int IdUsuario { get; set; }
        public String Nombre { get; set; }
        public String Apellidos { get; set; }
        public String Usuario { get; set; }
        public String Pass { get; set; }
    }
}

//(IdUsuario, Nombre, Apellidos, Usuario, Contraseña