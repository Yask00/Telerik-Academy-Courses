using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5.TriangleSurfaceByThreeSides
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] triangleSides = new double[3];

            for (int i = 0; i < triangleSides.Length; i++)
            {
                triangleSides[i] = double.Parse(Console.ReadLine());
            }

            Array.Sort(triangleSides);
            double a = triangleSides[2];
            double b = triangleSides[1];
            double c = triangleSides[0];

            double s = (a + b + c) / 2;
            double surface = Math.Sqrt(s * (s - a) * (s - b) * (s - c));



            Console.WriteLine("{0:f}", surface);
        }
    }
}
