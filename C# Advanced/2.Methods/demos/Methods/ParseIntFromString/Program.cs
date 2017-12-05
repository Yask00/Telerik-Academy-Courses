using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParseIntFromString
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = ParseInt("12361");
            Console.WriteLine(number + 5);
        }

        static int ParseInt (string numberAsString)
        {
            int result = 0;
            //for (int i = 0; i < numberAsString.Length; i++)
            //{
            //    int digitValue = numberAsString[i] - '0';
            //    result += (int)(digitValue * Math.Pow(10, numberAsString.Length - 1 - i));
            //}

            foreach (char digit in numberAsString)
            {
                result = result * 10 /* base */ + (digit - '0');
                Console.WriteLine(result);
            }
            return result;
        }
    }
}
