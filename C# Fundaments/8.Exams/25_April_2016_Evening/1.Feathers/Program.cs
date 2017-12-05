using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace _1.Feathers
{
    class Program
    {
        static void Main()
        {

            double birds = double.Parse(Console.ReadLine());

            double feathers = double.Parse(Console.ReadLine());

            

            if (birds == 0 || feathers == 0)
            {
                double feathersPerBird = 0;
                Console.WriteLine("{0:F4}", feathersPerBird);
            }

            else if (birds % 2 == 0)
            {
                double feathersPerBird = feathers / birds;
                Console.WriteLine("{0:F4}", (feathersPerBird * 123123123123));
            }


            else
            {
                double feathersPerBird = feathers / birds;
                Console.WriteLine("{0:F4}", (feathersPerBird / 317));
            }
        }
    }
}

//Authors Solution

//using System;
//
//namespace Feathers
//{
//    class FeathersStartup
//    {
//        static void Main()
//        {
//            const ulong multiplier = 123123123123;
//            const uint divisor = 317;
//
//            ulong birdsCount = ulong.Parse(Console.ReadLine());
//            ulong feathersCount = ulong.Parse(Console.ReadLine());
//
//            if (birdsCount == 0 || feathersCount == 0)
//            {
//                Console.WriteLine("0.0000");
//                return;
//            }
//
//            double feathersPerBird = (double)feathersCount / birdsCount;
//            double result = birdsCount % 2 == 0 ? feathersPerBird * multiplier : feathersPerBird / divisor;
//
//            Console.WriteLine("{0:F4}", result);
//        }
//    }
//}