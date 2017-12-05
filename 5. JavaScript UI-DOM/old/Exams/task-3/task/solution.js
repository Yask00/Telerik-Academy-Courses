function solve() {
	return function() {
		var template = [
			//'{{#data}}',
			'<h1>{{title}}</h1>',
			
			'<ul>',

			'{{#each posts}}',

				'<li>',

					'<div class="post">',

						'{{#if author}}<p class="author"><a class="user" href="/user/{{author}}">{{author}}</a>',
						'</p>',

						'{{else}}<p class="author"><a class="anonymous">Anonymous</a></p>',

						'{{/if}}',
						
						'<pre class="content">{{{text}}}</pre>',

					'</div>',

					'<ul>',

						'{{#each comments}}',

						'{{#if deleted}}',
						
						'{{else}}',

							'<li>',
									'<div class = "comment">',

										'{{#if author}}<p class="author"><a class="user" href="/user/{{author}}">{{author}}</a>',
										'</p>',

										'{{else}}<p class="author"><a class="anonymous">Anonymous</a>',
										'</p>',

										'{{/if}}',

										'<pre class="content">{{{text}}}</pre>',
									'</div>',
							'</li>',

						'{{/if}}',

						'{{/each}}',

					'</ul>',

				'</li>',

				
			'{{/each}}',

			'</ul>',
//'{{/data}}'


		].join('\n');

		return template;
	}
}

// submit the above

if(typeof module !== 'undefined') {
	module.exports = solve;
}
