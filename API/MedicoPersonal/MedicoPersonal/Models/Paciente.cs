using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicoPersonal.Models
{
    public class Paciente
    {
        
        public int Id { get; set; }
        public string NSS { get; set; }
        public bool Estatus { get; set; }
        public string Pin { get; set; }
    }
}