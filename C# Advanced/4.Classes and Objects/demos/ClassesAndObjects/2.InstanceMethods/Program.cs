using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.InstanceMethods
{
    class Program
    {
        static void Main()
        {
            String sampleLower = new String('a', 5);
            String sampleUpper = sampleLower.ToUpper();

            Console.WriteLine(sampleLower); // aaaaa
            Console.WriteLine(sampleUpper); // AAAAA

            DateTime now = DateTime.Now;
            DateTime later = now.AddHours(8);

            Console.WriteLine("Now: {0}", now);
            Console.WriteLine("8 hours later: {0}", later);
        }
    }
}
