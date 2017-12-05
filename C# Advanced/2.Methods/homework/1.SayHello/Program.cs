using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.SayHello
{
    class Program
    {
        static void Main()
        {
            Question();
        }

        static void Question()
        {
            string yourName = Console.ReadLine();
            Console.WriteLine("Hello, {0}!", yourName);
        }
    }
}
