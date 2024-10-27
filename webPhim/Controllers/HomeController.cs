using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace webPhim.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Test()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult TrangChu()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult TrangChu2()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult TrangChu3()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult TrangChu4()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult TrangChu5()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult TrangChu6()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}