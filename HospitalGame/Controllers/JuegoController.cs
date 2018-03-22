using System;
using System.Collections.Generic;
using System.Linq;
using System.Timers;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using static System.Net.Mime.MediaTypeNames;
using System.Text;
using HospitalGame.Models;
using System.Web.Services.Description;
using System.Threading.Tasks;
using System.Collections;

namespace HospitalGame.Controllers
{
    public class JuegoController : Controller
    {
        ModeloGame modelo;
        public JuegoController()
        {
            modelo = new ModeloGame();
        }
        // GET: Juego
        public ActionResult Inicio()
        {

            return View();
        }

        //[HttpPost]
        //public ActionResult Inicio(int? IDPaciente, String Nombre, String Apellido, int Edad, int Reloj,
        // int IDEnfermedad, String Baja, String Eliminado)
        //{
        //    //ViewBag.saludo = saludo;
        //    //ViewBag.controlador = "He entrado al controlador " + saludo;
        //    //INSERTAR PACIENTE

        //    IDPaciente = modelo.GetMaximo();
        //    modelo.InsertarPacientes(IDPaciente.GetValueOrDefault(), Nombre, Apellido, Edad, Reloj, IDEnfermedad, Baja, Eliminado);
        //    //List<string> lista = modelo.GetPacientes();
        //    return View("");
        //}

            [HttpPost] 
        public ActionResult Inicio(int? IdUsuario, int? Puntos, String Nombre, String Apellidos, String Usuario, String Pass)     
        {
            IdUsuario = modelo.GetMaximoRanking();
            modelo.InsertarRanking(IdUsuario.GetValueOrDefault(), Puntos.GetValueOrDefault(), Nombre, Apellidos, Usuario, Pass);
             
            return View("");
        }
        public ActionResult VistaParcial()
        {
             List<MEJORES> lista = modelo.GetJugadores();
            return View(lista);
        }

        public ActionResult pruebas()
        {
            return View();
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
