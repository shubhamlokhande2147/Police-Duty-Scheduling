using System.Collections.Generic;
using System;
using System.Linq;
using IOCWeb.Models;
using IOCWeb.Contexts;

namespace IOCWeb.Managers
{

        public class Attendance_MasterManager:IAttendance_MasterManager
        {
              public bool Delete(int id)
                {
                    using(var context = new CollectionContext())
                    {
                        context.Attendance_Masters.Remove(context.Attendance_Masters.Find(id));
                        context.SaveChanges();
                    }
                    return true;
                }

                
                public List<Attendance_Master> GetAll()
                {
                    using (var context = new CollectionContext())
                    {
                    var products = from prod in context.Attendance_Masters select prod;
                    return products.ToList<Attendance_Master>();
                    }
                }

                  public Attendance_Master GetById(int id)
                  {
                        using (var context = new CollectionContext())
                        {
                        var product = context.Attendance_Masters.Find(id);
                        return product;
                        }
                  }

                     public bool Insert(Attendance_Master product)
                     {
                        using(var context = new CollectionContext())
                        {
                            context.Attendance_Masters.Add(product);
                            context.SaveChanges(); 
                        }
                        return true;
                     }

                     
                       public bool Update(Attendance_Master product)
                        {
                            using(var context = new CollectionContext())
                            {
                                var theProduct = context.Attendance_Masters.Find(product.AM_Idd);
                                theProduct.Belt_No = product.Belt_No;
                                theProduct.Name = product.Name;
                                theProduct.Email_Id = product.Email_Id;
                                theProduct.Mobile = product.Mobile;
                                theProduct.Username = product.Username;
                                theProduct.Password = product.Password;
                                context.SaveChanges();
                            }
                            return true;
                        }

        }
}        


