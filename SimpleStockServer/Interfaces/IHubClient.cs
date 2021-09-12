using System.Threading.Tasks;

namespace SimpleStockServer.Interfaces
{
    public interface IHubClient
    {
        Task BroadcastMessage();

        Task BroadcastMessage(string symbol);
    }
}
