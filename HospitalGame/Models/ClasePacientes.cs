using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HospitalGame.Models
{
    public class ClasePacientes
    {
        public int IDPaciente { get; set; }
        public String Nombre { get; set; }
        public String Apellido { get; set; }
        public int Edad { get; set; }
        public int Reloj { get; set; }
        public int IDEnfermedad { get; set; }
        public String Baja { get; set; }
        public String Eliminado { get; set; }
    }
}

/*(@IDPaciente INT,@Nombre NVARCHAR(20),@Apellido NVARCHAR(20),
 @Edad INT,@Reloj INT,@IDEnfermedad INT,@Baja NVARCHAR(20),@Eliminado NVARCHAR(20))*/
