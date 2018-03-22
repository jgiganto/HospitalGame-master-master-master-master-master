using System;
using System.Collections.Generic;
using System.Data.Objects;
using System.Linq;
using System.Web;


#region Procedimientos_almacenados
/* CREATE PROCEDURE INSERTARPACIENTES
 (@IDPaciente INT,@Nombre NVARCHAR(20),@Apellido NVARCHAR(20),
 @Edad INT,@Reloj INT,@IDEnfermedad INT,@Baja NVARCHAR(20),@Eliminado NVARCHAR(20))
 AS 
 INSERT INTO PACIENTES (IDPaciente,Nombre,Apellido,Edad,Reloj,IDEnfermedad,Baja,Eliminado) 
VALUES (@IDPaciente,@Nombre,@Apellido,@Edad,@Reloj,@IDEnfermedad,@Baja,@Eliminado)
GO
EXEC INSERTARPACIENTES 3,'Dizzy','Gillespie','55','60',3,'no','no'
 CREATE PROCEDURE INSERTARRANKING
 (@IdUsuario INT,@Nombre NVARCHAR(20),@Apellidos NVARCHAR(20),
 @Usuario NVARCHAR(20),@Contraseña NVARCHAR(20))
 AS 
 INSERT INTO RANKING (IdUsuario,Nombre,Apellidos,Usuario,Contraseña) 
VALUES (@IdUsuario,@Nombre,@Apellidos,@Usuario,@Contraseña)
GO
EXEC INSERTARRANKING 1,'Dizzy','Gillespie','80','60'
 */


#endregion
namespace HospitalGame.Models
{
    public class ModeloGame
    {
        ContextoHospitalGame contexto;
        public ModeloGame()
        {
            this.contexto = new ContextoHospitalGame();
        }
        public  void InsertarPacientes(int IDPaciente, String Nombre, String Apellido, int Edad, int Reloj,
          int IDEnfermedad, String Baja, String Eliminado)
        {
            
                contexto.INSERTARPACIENTES(IDPaciente, Nombre, Apellido, Edad, Reloj, IDEnfermedad, Baja, Eliminado);            
             
        }
        public void InsertarRanking(int IdUsuario,int Puntos, String Nombre, String Apellidos, String Usuario, String Pass)
        {

            contexto.INSERTARRANKING(IdUsuario, Puntos, Nombre, Apellidos, Usuario, Pass);

        }
        public List<MEJORES> GetJugadores()
        {
            var consulta = from datos in contexto.MEJORES
                           orderby datos.Puntos descending
                           select datos;
             
            return consulta.ToList();
        }
        
        public List<String> GetPacientes()
        {
            var consulta = from datos in contexto.PACIENTES
                           select datos.Apellido;
            return consulta.ToList();
        }
        public int GetMaximoRanking()
        {
            var consulta = from datos in contexto.MEJORES
                           select datos.IdUsuario;

            if (consulta.Count() == 0)
            {
                return 0;
            }
            else
            {
                return consulta.Max() + 1;
            }
        }
        public int GetMaximo()
        {
            var consulta = from datos in contexto.PACIENTES
                           select datos.IDPaciente;

            if (consulta.Count() == 0)
            {
                return 0;
            }
            else
            {
                return consulta.Max() + 1;
            }
        }
    }
}

/*      public int IDPaciente { get; set; }
        public String Nombre { get; set; }
        public String Apellido { get; set; }
        public int Edad { get; set; }
        public int Reloj { get; set; }
        public int IDEnfermedad { get; set; }
        public String Baja { get; set; }
        public String Eliminado { get; set; }*/
