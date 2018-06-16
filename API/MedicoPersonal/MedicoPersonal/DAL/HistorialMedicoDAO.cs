using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using Dapper;
using MedicoPersonal.Models;
using MedicoPersonal.Models.Intefaces;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;


namespace MedicoPersonal.DAL
{
    public class HistorialMedicoDAO : BaseDAO<HistorialMedico>
    {
        readonly string cadConn = ConfigurationManager.ConnectionStrings["DBExamen"].ToString();

        public bool CrearRegistro(HistorialMedico historial)
        {
            var parametros = new DynamicParameters();
            parametros.Add("id_paciente", historial.IdPaciente);
            parametros.Add("descripcion", historial.Descripcion);
            parametros.Add("estatus", historial.Estatus);
            parametros.Add("nombre_hospital", historial.NombreHospital);
            parametros.Add("fecha", historial.Fecha);

            using (var conexion = new MySqlConnection(cadConn))
            {
                try
                {
                    var registro = conexion.Query("sp_insertar_historial", parametros, commandType: System.Data.CommandType.StoredProcedure);
                    return true;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return false;
                }
            }

        }

        public List<HistorialMedico> ObtenerHistorial(int id)
        {
            var parametros = new DynamicParameters();
            parametros.Add("id_paciente", id);
            using (var conexion = new MySqlConnection(cadConn))
            {
                var registro = conexion.Query<HistorialMedico>("sp_obtener_historial", parametros, commandType: System.Data.CommandType.StoredProcedure);
                return registro.ToList();
            }
        }
    }
}