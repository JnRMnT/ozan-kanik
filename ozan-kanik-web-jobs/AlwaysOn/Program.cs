using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace AlwaysOn
{
    class Program
    {
        static void Main(string[] args)
        {
            using (HttpClient client = new HttpClient())
            {
                string url = "https://" + ConfigurationManager.AppSettings.Get("WEBSITE_SITE_NAME") + ".azurewebsites.net";
                Console.WriteLine("Getting " + url + "...");
                Task.Run(async () =>
                {
                    HttpResponseMessage responseMessage = await client.GetAsync(url);
                    Console.WriteLine(responseMessage.StatusCode);
                }).Wait();
            }
        }
    }
}
