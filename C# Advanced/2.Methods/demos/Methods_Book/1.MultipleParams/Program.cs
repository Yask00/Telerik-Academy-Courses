using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.MultipleParams
{
    class Program
    {
        static void Main(string[] args)
        {
            PrintMax(2.234f, 2.235f); //arguments
        }

        static void PrintMax(float number1, float number2) //parameters
        {
            float max = number1;
            if (number2 > max)
            {
                max = number2;
            }
            Console.WriteLine("Maximal number: " + max);
        }
    }
}
