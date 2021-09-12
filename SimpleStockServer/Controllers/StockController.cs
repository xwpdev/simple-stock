using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SimpleStockServer.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SimpleStockServer.Controllers
{
    [Route("api/[controller]")]
    public class StockController : Controller
    {
        private readonly IHubContext<BroadcastHub, IHubClient> _hubContext;

        public StockController(IHubContext<BroadcastHub, IHubClient> hubContext)
        {
            _hubContext = hubContext;
        }

        /// <summary>
        /// GET api/values/symbol
        /// Used to trigger update from the SERVER
        /// </summary>
        [HttpGet("{symbol}")]
        public string Get(string symbol)
        {
            // broadcast notification
            _hubContext.Clients.All.BroadcastMessage(symbol);

            return symbol;
        }
    }
}
