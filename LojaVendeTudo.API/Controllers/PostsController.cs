using LojaVendeTudo.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace LojaVendeTudo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private string endPoint;
        private HttpRequestMessage request;
        HttpContext httpContext;
        private HttpClient client;

        [Route("/api/GetGitHubFollowers")]
        [HttpGet()]
        public async Task<IActionResult> GetGitHubFollowers()
        {
            endPoint = "https://api.github.com/users/Lvitorasso/followers";
            request = new HttpRequestMessage(HttpMethod.Get, endPoint);

            using (client = new HttpClient())
            {
                client.BaseAddress = new Uri(endPoint);
                client.DefaultRequestHeaders.Add("Accept", "application/vnd.github.v3+json");
                client.DefaultRequestHeaders.Add("User-Agent", "HttpClientFactory-Sample");

                var response = await client.SendAsync(request);

                if (response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStreamAsync();
                    var conteudoJSON = await System.Text.Json.JsonSerializer.DeserializeAsync<Object>(responseBody);

                    return Ok(conteudoJSON);
                }
                else
                    return BadRequest(response.ReasonPhrase);
            }

        }

        [Route("/api/GetTodos")]
        [HttpGet()]
        public async Task<IActionResult> GetTodos()
        {
            endPoint = "https://jsonplaceholder.typicode.com/posts";
            request = new HttpRequestMessage(HttpMethod.Get, endPoint);

            using (client = new HttpClient())
            {
                client.BaseAddress = new Uri(endPoint);
                client.DefaultRequestHeaders.Add("Accept", "application/xhtml+xml");
                client.DefaultRequestHeaders.Add("User-Agent", "HttpClientFactory-Sample");

                var response = await client.SendAsync(request);

                if (response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStreamAsync();
                    var conteudoJSON = await System.Text.Json.JsonSerializer.DeserializeAsync<Object>(responseBody);

                    return Ok(conteudoJSON);
                }
                else
                    return BadRequest(response.ReasonPhrase);
            }

        }

        [Route("/api/GetTodos/id")]
        [HttpGet()]
        public async Task<IActionResult> GetTodos(int id)
        {
            endPoint = "https://jsonplaceholder.typicode.com/posts/" + id;
            request = new HttpRequestMessage(HttpMethod.Get, endPoint);

            using (client = new HttpClient())
            {
                client.BaseAddress = new Uri(endPoint);
                client.DefaultRequestHeaders.Add("Accept", "application/xhtml+xml");
                client.DefaultRequestHeaders.Add("User-Agent", "HttpClientFactory-Sample");

                var response = await client.SendAsync(request);

                if (response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStreamAsync();
                    var conteudoJSON = await System.Text.Json.JsonSerializer.DeserializeAsync<Object>(responseBody);

                    return Ok(conteudoJSON);
                }
                else
                    return BadRequest(response.ReasonPhrase);
            }

        }


        [Route("/api/DeletePorID")]
        [HttpDelete]
        public async Task<IActionResult> DeletePorID(int ID)
        {
            endPoint = "https://jsonplaceholder.typicode.com/posts/";
            request = new HttpRequestMessage(HttpMethod.Delete, endPoint);

            using (client = new HttpClient())
            {
                client.BaseAddress = new Uri(endPoint);
                client.DefaultRequestHeaders.Add("Accept", "application/xhtml+xml");
                client.DefaultRequestHeaders.Add("User-Agent", "HttpClientFactory-Sample");

                var response = await client.DeleteAsync(endPoint + 1);

                if (response.IsSuccessStatusCode)
                    return Ok();
                else
                    return BadRequest(response.ReasonPhrase);
            }
        }

        [Route("api/UpdatePorID")]
        [HttpPut]
        public async Task<IActionResult> UpdatePorID([FromBody] Posts postBody)
        {
            endPoint = "https://jsonplaceholder.typicode.com/posts/" + postBody.id;
            request = new HttpRequestMessage(HttpMethod.Delete, endPoint);
            var stringContent = new StringContent(JsonConvert.SerializeObject(postBody), Encoding.UTF8, "application/json");

            using (client = new HttpClient())
            {
                client.BaseAddress = new Uri(endPoint);
                client.DefaultRequestHeaders.Add("Accept", "application/xhtml+xml");
                client.DefaultRequestHeaders.Add("User-Agent", "HttpClientFactory-Sample");

                var response = await client.PutAsync(endPoint, stringContent);

                if (response.IsSuccessStatusCode)
                    return Ok();
                else
                    return BadRequest(response.ReasonPhrase);
            }
        }
    }
}
