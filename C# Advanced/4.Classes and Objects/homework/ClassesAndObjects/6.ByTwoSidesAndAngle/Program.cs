using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _6.ByTwoSidesAndAngle
{
    class Program
    {
        static void Main(string[] args)
        {

            double a = double.Parse(Console.ReadLine());
            double b = double.Parse(Console.ReadLine());
            double g = double.Parse(Console.ReadLine()) * (Math.PI / 180);

            double surface = (a * b * Math.Sin(g)) / 2;

            Console.WriteLine("{0:f2}", surface);
        }
    }
}
