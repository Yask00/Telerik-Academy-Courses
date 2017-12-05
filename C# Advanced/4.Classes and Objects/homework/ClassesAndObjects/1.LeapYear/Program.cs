using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.LeapYear
{
    class Program
    {
        static void Main()
        {
            int input = int.Parse(Console.ReadLine());
            IsLeapYear(input);
            //System.DateTime
        }

        static void IsLeapYear(int year)
        {
            bool isLeap = DateTime.IsLeapYear(year);
            if (isLeap)
            {
                Console.WriteLine("Leap");
            }
            else
            {
                Console.WriteLine("Common");
            }
        }
    }
}

//old solution
//using System;
//
//public class LeapYear
//{
//    public static void Main(string[] args)
//    {
//        int year = int.Parse(Console.ReadLine());
//        var output = DateTime.IsLeapYear(year) ? "Leap" : "Common";
//
//        Console.WriteLine(output);
//    }
//}