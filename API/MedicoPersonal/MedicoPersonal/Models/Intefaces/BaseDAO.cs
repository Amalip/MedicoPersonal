using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicoPersonal.Models.Intefaces
{
    public interface BaseDAO<T>
    {
        List<T> ObtenerHistorial(int id);
        bool CrearRegistro(HistorialMedico historial);

    }
}