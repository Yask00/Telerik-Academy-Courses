using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.MutantSquirrels
{
    class Program
    {
        static void Main(string[] args)
        {

            double treesNumber = double.Parse(Console.ReadLine());
            double branchesOnTree = double.Parse(Console.ReadLine());
            double squirrelsOnBranch = double.Parse(Console.ReadLine());
            double AverageTailsPerSquirrel = double.Parse(Console.ReadLine());

            double totalTails = treesNumber * branchesOnTree * squirrelsOnBranch * AverageTailsPerSquirrel;
            double result;

            if (totalTails % 2 == 0)
            {
                result = totalTails * 376439;
                Console.WriteLine("{0:F3}", result);
            }
            else
            {
                result = totalTails / 7;
                Console.WriteLine("{0:F3}", result);
            }

        }
    }
}


//Prevoius Solution
//using System;
//
//
//
//    class Mutant_Squirrel
//        {
//            static void Main()
//            {
//
//                double T = double.Parse(Console.ReadLine());
//                double B = double.Parse(Console.ReadLine());
//                double S = double.Parse(Console.ReadLine());
//                double N = double.Parse(Console.ReadLine());
//
//
//                double tails = (T * B * S * N);
//
//                //Console.WriteLine(tails);
//
//                if (tails % 2 == 0)
//                {
//                    tails = tails * 376439;
//                    Console.WriteLine("{0:F3}", tails);
//                }
//                else if (tails % 2 != 0)
//                {
//                    tails = tails / 7;
//                    Console.WriteLine("{0:F3}", tails);
//                }
//            }
//        }


//Authors Solution
//using System;
//
//namespace MutantSquirrels
//{
//    class MutantSquirrelsStartup
//    {
//        static void Main()
//        {
//            const ulong multiplier = 376439;
//            const double divisor = 7.00;
//
//            ulong trees = ulong.Parse(Console.ReadLine());
//            uint branchesPerTree = uint.Parse(Console.ReadLine());
//            uint birdsPerBranch = uint.Parse(Console.ReadLine());
//            uint feathersPerBird = uint.Parse(Console.ReadLine());
//            ulong originalTailsCount = trees * branchesPerTree * birdsPerBranch * feathersPerBird;
//
//            Console.WriteLine("{0:F3}",
//                originalTailsCount % 2 == 0 ?
//                originalTailsCount * multiplier :
//                originalTailsCount / divisor);
//        }
//    }
//}