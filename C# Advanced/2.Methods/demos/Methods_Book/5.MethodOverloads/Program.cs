using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5.MethodOverloads
{
    class Program
    {
        static void Main(string[] args)
        {

            PrintNumbers(2.71f, 2);  //second Method
            PrintNumbers(5, 3.14159f); //first Method

        }

        static void PrintNumbers(int intValue, float floatValue)
        {
            Console.WriteLine(intValue + "; " + floatValue);
        }
        static void PrintNumbers(float floatValue, int intValue)
        {
            Console.WriteLine(floatValue + "; " + intValue);
        }
    }
}
