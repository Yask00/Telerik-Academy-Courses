using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.PrimitiveArguments
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberArg = 3; 

            PrintNumber(numberArg);
            Console.WriteLine("in the Main() method number is: " + numberArg);
        }

        static void PrintNumber(int numberParam)
        {
            // Modifying the primitive-type parameter
            numberParam = 5;
            Console.WriteLine("in PrintNumber() method, after the " +
            "modification, numberParam is {0}: ", numberParam);
        }


    }
}
