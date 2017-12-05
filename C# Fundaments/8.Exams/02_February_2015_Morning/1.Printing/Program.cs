using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.Printing
{
    class Program
    {
        static void Main(string[] args)
        {

            double numberOfStudentsN = double.Parse(Console.ReadLine());
            double sheetsPerStudentS = double.Parse(Console.ReadLine());
            double priceOfRealmP = double.Parse(Console.ReadLine());

            double numberOfRealms = (numberOfStudentsN * sheetsPerStudentS) / 500;
            double totalPrice = numberOfRealms * priceOfRealmP;

            Console.WriteLine("{0:F2}", totalPrice);
        }
    }
}


//Prevoius Submission
//using System;
//
//
//
//class Problem_1_Monay
//{
//    static void Main()
//    {
//
//        double N = double.Parse(Console.ReadLine());
//        double S = double.Parse(Console.ReadLine());
//        double P = double.Parse(Console.ReadLine());
//
//        double totalpaper = (N * S);
//
//        double sum = ((totalpaper / 500) * P);
//
//        Console.WriteLine("{0:F2}", sum);
//
//    }
//}