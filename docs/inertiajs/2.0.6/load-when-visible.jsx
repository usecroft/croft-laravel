infinite scrolling pagination
whenvisible component
whenvisible usage
whenvisible props
whenvisible params

You can use WhenVisible for infinite scrolling by using the 'always' and 'params' props, combined with Inertia Merge.

The 'params' prop should be used to pass the page number to the server, and to set 'only' to the props being updated.

If you're adding infinite scrolling using a 'page' or similar prop, make sure you pass the 'page' prop to the 'params' (+1), but also pass it as 'data' to the WhenVisible component in an array with the other prop you're trying to infinitely load.

      <H1>Load when visible</H1>
      <P>
        Inertia supports loading data on scroll using the Intersection Observer API. It provides the
        <Code>WhenVisible</Code> component as a convenient way to load data when an element becomes visible in the
        viewport.
      </P>



      <H2>Client side</H2>
      <P>
        The <Code>WhenVisible</Code> component accepts a <Code>data</Code> prop that specifies the key of the prop to
        load. It also accepts a <Code>fallback</Code> prop that specifies a component to render while the data is
        loading. The <Code>WhenVisible</Code> component should wrap the component that depends on the data.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue',
            language: 'markup',
            code: dedent`
            <script setup>
            import { WhenVisible } from '@inertiajs/vue3'
            </script>

            <template>
                <WhenVisible data="permissions">
                    <template #fallback>
                        <div>Loading...</div>
                    </template>

                    <div v-for="permission in permissions">
                        <!-- ... -->
                    </div>
                </WhenVisible>
            </template>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
            import { WhenVisible } from '@inertiajs/react'

            export default () => (
                <WhenVisible data="permissions" fallback={() => <div>Loading...</div>}>
                    <PermissionsChildComponent />
                </WhenVisible>
            )
            `,
          },
          {
            name: 'Svelte 4',
            language: 'jsx',
            code: dedent`
            <script>
                import { WhenVisible } from '@inertiajs/svelte'

                export let permissions
            </script>

            <WhenVisible data="permissions">
                <svelte:fragment slot="fallback">
                    <div>Loading...</div>
                </svelte:fragment>

                {#each permissions as permission}
                    <!-- ... -->
                {/each}
            </WhenVisible>
            `,
          },
          {
            name: 'Svelte 5',
            language: 'jsx',
            code: dedent`
            <script>
                import { WhenVisible } from '@inertiajs/svelte'

                let { permissions } = $props()
            </script>

            <WhenVisible data="permissions">
                {#snippet fallback()}
                    <div>Loading...</div>
                {/snippet}

                {#each permissions as permission}
                    <!-- ... -->
                {/each}
            </WhenVisible>
            `,
          },
        ]}
      />
      <P>
        If you'd like to load multiple props when an element becomes visible, you can provide an array to the{' '}
        <Code>data</Code> prop.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue',
            language: 'markup',
            code: dedent`
            <script setup>
            import { WhenVisible } from '@inertiajs/vue3'
            </script>

            <template>
                <WhenVisible :data="['teams', 'users']">
                    <template #fallback>
                        <div>Loading...</div>
                    </template>

                    <!-- Props are now loaded -->
                </WhenVisible>
            </template>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
            import { WhenVisible } from '@inertiajs/react'

            export default () => (
                <WhenVisible data={['teams', 'users']} fallback={() => <div>Loading...</div>}>
                    <ChildComponent />
                </WhenVisible>
            )
            `,
          },
          {
            name: 'Svelte 4',
            language: 'jsx',
            code: dedent`
            <script>
                import { WhenVisible } from '@inertiajs/svelte'

                export let teams
                export let users
            </script>

            <WhenVisible data={['teams', 'users']}>
                <svelte:fragment slot="fallback">
                    <div>Loading...</div>
                </svelte:fragment>

                <!-- Props are now loaded -->
            </WhenVisible>
            `,
          },
          {
            name: 'Svelte 5',
            language: 'jsx',
            code: dedent`
            <script>
                import { WhenVisible } from '@inertiajs/svelte'

                let { teams, users } = $props()
            </script>

            <WhenVisible data={['teams', 'users']}>
                {#snippet fallback()}
                    <div>Loading...</div>
                {/snippet}

                <!-- Props are now loaded -->
            </WhenVisible>
            `,
          },
        ]}
      />
      <H2>Loading before visible</H2>
      <P>
        If you'd like to start loading data before the element is visible, you can provide a value to the{' '}
        <Code>buffer</Code> prop. The buffer value is a number that represents the number of pixels before the element
        is visible.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue',
            language: 'markup',
            code: dedent`
            <script setup>
            import { WhenVisible } from '@inertiajs/vue3'
            </script>

            <template>
                <WhenVisible data="permissions" :buffer="500">
                    <template #fallback>
                        <div>Loading...</div>
                    </template>

                    <div v-for="permission in permissions">
                        <!-- ... -->
                    </div>
                </WhenVisible>
            </template>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
            import { WhenVisible } from '@inertiajs/react'

            export default () => (
                <WhenVisible data="permissions" buffer={500} fallback={() => <div>Loading...</div>}>
                    <PermissionsChildComponent />
                </WhenVisible>
            )
            `,
          },
          {
            name: 'Svelte 4',
            language: 'jsx',
            code: dedent`
            <script>
                import { WhenVisible } from '@inertiajs/svelte'

                export let permissions
            </script>

            <WhenVisible data="permissions" buffer={500}>
                <svelte:fragment slot="fallback">
                    <div>Loading...</div>
                </svelte:fragment>

                {#each permissions as permission}
                    <!-- ... -->
                {/each}
            </WhenVisible>
            `,
          },
          {
            name: 'Svelte 5',
            language: 'jsx',
            code: dedent`
            <script>
                import { WhenVisible } from '@inertiajs/svelte'

                let { permissions } = $props()
            </script>

            <WhenVisible data="permissions" buffer={500}>
                {#snippet fallback()}
                    <div>Loading...</div>
                {/snippet}

                {#each permissions as permission}
                    <!-- ... -->
                {/each}
            </WhenVisible>
            `,
          },
        ]}
      />
      <P>In the above example, the data will start loading 500 pixels before the element is visible.</P>
      <P>
        By default, the <Code>WhenVisible</Code> component wraps the fallback template in a <Code>div</Code> element so
        it can ensure the element is visible in the viewport. If you want to customize the wrapper element, you can
        provide the <Code>as</Code> prop.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Vue',
            language: 'markup',
            code: dedent`
            <script setup>
            import { WhenVisible } from '@inertiajs/vue3'
            </script>

            <template>
                <WhenVisible data="products" as="span">
                    <!-- ... -->
                </WhenVisible>
            </template>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
            import { WhenVisible } from '@inertiajs/react'

            export default () => (
                <WhenVisible data="products" as="span">
                    <ProductsChildComponent />
                </WhenVisible>
            )
            `,
          },
          {
            name: 'Svelte 4',
            language: 'jsx',
            code: dedent`
            <script>
                import { WhenVisible } from '@inertiajs/svelte'

                export let products
            </script>

            <WhenVisible data="products" as="span">
                <!-- ... -->
            </WhenVisible>
            `,
          },
          {
            name: 'Svelte 5',
            language: 'jsx',
            code: dedent`
            <script>
                import { WhenVisible } from '@inertiajs/svelte'

                let { products } = $props()
            </script>

            <WhenVisible data="products" as="span">
                <!-- ... -->
            </WhenVisible>
            `,
          },
        ]}
      />
      <H2>Always trigger - critical for infinite scrolling</H2>
      <P>
        By default, the <Code>WhenVisible</Code> component will only trigger once when the element becomes visible. If
        you want to always trigger the data loading when the element is visible, you can provide the <Code>always</Code>{' '}
        prop.
      </P>
      <P>
        This is useful when you want to load data every time the element becomes visible, such as when the element is at
        the end of an infinite scroll list and you want to load more data.
      </P>
      <P>
        Note that if the data loading request is already in flight, the component will wait until it is finished to
        start the next request if the element is still visible in the viewport.
      </P>
      <p>Note that you can pass the <Code>params</Code> prop to the <Code>WhenVisible</Code> component to pass additional parameters to the data loading request, such as the new page number.</p>
      <TabbedCode
        examples={[
          {
            name: 'Vue',
            language: 'markup',
            code: dedent`
            <script setup>
            import { WhenVisible } from '@inertiajs/vue3'
            </script>

            <template>
                <WhenVisible data="products" always>
                    <!-- ... -->
                </WhenVisible>
            </template>
            `,
          },
          {
            name: 'React',
            language: 'jsx',
            code: dedent`
            import { WhenVisible } from '@inertiajs/react'

            export default () => (
                <WhenVisible data="products" always>
                    <ProductsChildComponent />
                </WhenVisible>
            )
            `,
          },
          {
            name: 'Svelte 4',
            language: 'jsx',
            code: dedent`
            <script>
                import { WhenVisible } from '@inertiajs/svelte'

                export let products
            </script>

            <WhenVisible data="products" always>
                <!-- ... -->
            </WhenVisible>
            `,
          },
          {
            name: 'Svelte 5',
            language: 'jsx',
            code: dedent`
            <script>
                import { WhenVisible } from '@inertiajs/svelte'

                let { products } = $props()
            </script>

            <WhenVisible data="products" always>
                <!-- ... -->
            </WhenVisible>
            `,
          },
        ]}
      />
      <H2>Server side</H2>
      <P>
        To achieve this, you can use the <Code>optional</Code> method when returning your response. This method receives
        a callback that returns the prop data. The callback will be executed in a separate request once the element
        becomes visible.
      </P>
      <TabbedCode
        examples={[
          {
            name: 'Laravel',
            language: 'php',
            code: dedent`
            Route::get('/users', function () {
                return Inertia::render('Users/Index', [
                    'users' => User::all(),
                    'roles' => Role::all(),
                    'permissions' => Inertia::optional(fn () => Permission::all()),
                ]);
            });
            `,
          },
        ]}
      />
    </>

  )
}
